import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, forkJoin, map, switchMap, tap } from 'rxjs';
import { getAge } from 'src/app/core/helpers/get-age';
import { Pokemon } from 'src/app/core/interfaces/pokemon';
import { PokemonTrainerService } from 'src/app/core/services/pokemon-trainer.service';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  private pokemonTrainerService = inject(PokemonTrainerService);
  private router = inject(Router);

  profile$ = this.pokemonTrainerService.profile$;
  selectedPokemons$!: Observable<Pokemon[]>;
  isAdult = false;

  ngOnInit(): void {
    this.profile$ = this.pokemonTrainerService.profile$.pipe(
      tap((profile) => {
        if (!profile) {
          this.router.navigate(['trainer-profile']);
          return;
        }

        this.isAdult = getAge(profile.birthday) >= 18;
      }),
    );
    this.selectedPokemons$ = this.pokemonTrainerService.selectedPokemons$.pipe(
      tap(
        (selectedPokemons) =>
          selectedPokemons.length !== 3 &&
          this.router.navigate(['pokemon-selector']),
      ),
      switchMap((selectedPokemons) =>
        forkJoin(
          selectedPokemons.map((id) =>
            this.pokemonTrainerService.getPokemonById(id),
          ),
        ),
      ),
      map(
        (selectedPokemons) =>
          selectedPokemons.filter((pokemon) => !!pokemon) as Pokemon[],
      ),
    );
  }
}
