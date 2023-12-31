import { Component, OnInit, inject } from '@angular/core';
import { ENTER } from '@angular/cdk/keycodes';
import { FormBuilder, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import {
  Observable,
  distinctUntilChanged,
  map,
  merge,
  startWith,
  take,
  tap,
} from 'rxjs';
import { MatChipInputEvent } from '@angular/material/chips';
import { DateTime } from 'luxon';
import { PokemonTrainerService } from 'src/app/core/services/pokemon-trainer.service';
import { Router } from '@angular/router';
import { getAge } from 'src/app/core/helpers/get-age';

@Component({
  templateUrl: './trainer-profile-page.component.html',
  styleUrls: ['./trainer-profile-page.component.scss'],
})
export class TrainerProfilePageComponent implements OnInit {
  private fb = inject(FormBuilder).nonNullable;
  private pokemonTrainerService = inject(PokemonTrainerService);
  private router = inject(Router);

  separatorKeysCodes: number[] = [ENTER];
  today = DateTime.now();

  trainerProfileForm = this.fb.group({
    name: ['', [Validators.required]],
    hobby: this.fb.control<string[]>([], [Validators.required]),
    birthday: this.fb.control<DateTime | ''>('', [Validators.required]),
    document: ['', []],
    image: ['', [Validators.required]],
  });
  hobbyInputControl = this.fb.control<string>('');
  filteredHobbies$!: Observable<string[]>;
  isAdult$!: Observable<boolean>;
  hobbyList: string[] = [
    'Play Soccer',
    'Play Basketball',
    'Play Tennis',
    'Play Volleyball',
    'Play Video Games',
  ];

  get hobbyControl() {
    return this.trainerProfileForm.controls.hobby;
  }

  get birthdayControl() {
    return this.trainerProfileForm.controls.birthday;
  }

  get documentControl() {
    return this.trainerProfileForm.controls.document;
  }

  get profileImage() {
    return this.trainerProfileForm.controls.image.value;
  }

  set profileImage(imageURL: string) {
    this.trainerProfileForm.controls.image.setValue(imageURL);
  }

  ngOnInit(): void {
    this.filteredHobbies$ = this.hobbyInputControl.valueChanges.pipe(
      startWith(null),
      map((hobby: string | null) =>
        hobby ? this._filter(hobby) : this.hobbyList.slice(),
      ),
    );

    this.isAdult$ = merge(
      this.birthdayControl.valueChanges,
      this.pokemonTrainerService.profile$.pipe(
        take(1),
        map((profile) => {
          if (!profile) return '';

          const birthday = DateTime.fromISO(profile.birthday);

          this.trainerProfileForm.setValue({
            ...profile,
            birthday,
            hobby: [profile.hobby],
          });

          return birthday;
        }),
      ),
    ).pipe(
      map((birthday) => birthday !== '' && getAge(birthday) >= 18),
      distinctUntilChanged(),
      tap((isAdult) =>
        isAdult
          ? this.documentControl.addValidators(Validators.required)
          : this.documentControl.removeValidators(Validators.required),
      ),
    );
  }

  submitTrainerProfile() {
    if (this.trainerProfileForm.invalid) return;

    const formValue = this.trainerProfileForm.getRawValue();

    this.pokemonTrainerService.profile = {
      ...formValue,
      birthday: formValue.birthday && formValue.birthday.toFormat('yyyy-MM-dd'),
      hobby: formValue.hobby.at(0) as string,
    };

    this.router.navigate(['pokemon-selector']);
  }

  addHobby(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) this.hobbyControl.setValue([value]);

    event.chipInput.clear();
  }

  removeHobby() {
    this.hobbyControl.setValue([]);
    this.hobbyInputControl.setValue('');
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.hobbyControl.setValue([event.option.viewValue]);
    this.hobbyInputControl.setValue('');
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.hobbyList.filter((hobby) =>
      hobby.toLowerCase().includes(filterValue),
    );
  }
}
