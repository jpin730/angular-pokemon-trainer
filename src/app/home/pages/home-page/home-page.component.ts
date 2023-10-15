import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, forkJoin, switchMap, tap } from 'rxjs';
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

  ngOnInit(): void {
    this.profile$ = this.pokemonTrainerService.profile$;
    this.selectedPokemons$ = this.pokemonTrainerService.selectedPokemons$.pipe(
      tap((selectedPokemons) => {
        if (selectedPokemons.length !== 3)
          this.router.navigate(['pokemon-selector']);
      }),
      switchMap((selectedPokemons) =>
        forkJoin(
          selectedPokemons.map((id) =>
            this.pokemonTrainerService.getPokemonById(id),
          ),
        ),
      ),
    );
  }
}
