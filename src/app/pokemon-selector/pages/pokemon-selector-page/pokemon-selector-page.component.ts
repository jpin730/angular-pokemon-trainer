import { Location } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { getAge } from 'src/app/core/helpers/get-age';
import { Pokemon } from 'src/app/core/interfaces/pokemon';
import { TrainerProfile } from 'src/app/core/interfaces/trainer-profile';
import { PokemonTrainerService } from 'src/app/core/services/pokemon-trainer.service';

@Component({
  templateUrl: './pokemon-selector-page.component.html',
  styleUrls: ['./pokemon-selector-page.component.scss'],
})
export class PokemonSelectorPageComponent implements OnInit {
  private pokemonTrainerService = inject(PokemonTrainerService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private location = inject(Location);

  profile$!: Observable<TrainerProfile | null>;
  pokemons$!: Observable<Pokemon[]>;
  isAdult = false;

  ngOnInit() {
    this.profile$ = this.pokemonTrainerService.profile$.pipe(
      tap((profile) => {
        if (!profile) {
          this.router.navigate(['trainer-profile']);
          return;
        }
        this.isAdult = getAge(profile.birthday) >= 18;
      }),
    );

    this.pokemons$ = this.route.data.pipe(
      map((data) => data['pokemons'] ?? []),
    );
  }

  onClickBackButton() {
    this.location.back();
  }
}
