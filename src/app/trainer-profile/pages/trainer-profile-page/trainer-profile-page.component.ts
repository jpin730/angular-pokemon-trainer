import { Component, OnInit, inject } from '@angular/core';
import { ENTER } from '@angular/cdk/keycodes';
import { FormBuilder, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable, distinctUntilChanged, map, startWith, tap } from 'rxjs';
import { MatChipInputEvent } from '@angular/material/chips';
import { DateTime } from 'luxon';

@Component({
  templateUrl: './trainer-profile-page.component.html',
  styleUrls: ['./trainer-profile-page.component.scss'],
})
export class TrainerProfilePageComponent implements OnInit {
  private fb = inject(FormBuilder).nonNullable;
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
    'Jugar Fútbol',
    'Jugar Basketball',
    'Jugar Tennis',
    'Jugar Voleibol',
    'Jugar Fifa',
    'Jugar Videojuegos',
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

    this.isAdult$ = this.birthdayControl.valueChanges.pipe(
      startWith<DateTime | ''>(''),
      map(
        (birthday) =>
          birthday !== '' &&
          Math.abs(birthday.diff(this.today, 'years').years) >= 18,
      ),
      distinctUntilChanged(),
      tap(() => this.documentControl.reset()),
      tap((isAdult) =>
        isAdult
          ? this.documentControl.addValidators(Validators.required)
          : this.documentControl.removeValidators(Validators.required),
      ),
    );
  }

  onLoadImage(imageURL: string) {
    this.profileImage = imageURL;
  }

  submitTrainerProfile() {
    if (this.trainerProfileForm.invalid) return;

    const formValue = this.trainerProfileForm.getRawValue();

    // TODO: console.log({
    //   ...formValue,
    //   birthday: formValue.birthday && formValue.birthday.toFormat('yyyy-MM-dd'),
    //   hobby: formValue.hobby.at(0),
    // });
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
