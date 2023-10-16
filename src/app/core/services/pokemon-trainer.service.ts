import { Injectable, inject } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  catchError,
  forkJoin,
  map,
  of,
  tap,
} from 'rxjs';
import { TrainerProfile } from '../interfaces/trainer-profile';
import { HttpClient } from '@angular/common/http';
import { GetPokemonResponse, Stat } from '../interfaces/poke-api-response';
import { Pokemon, PokemonStats } from '../interfaces/pokemon';
import { SnackBarServiceService } from './snack-bar-service.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonTrainerService {
  private http = inject(HttpClient);
  private snackBarService = inject(SnackBarServiceService);

  private profileSubject = new BehaviorSubject<TrainerProfile | null>(null);
  private selectedPokemonsSubject = new BehaviorSubject<number[]>([]);
  private apiBaseUrl = 'https://pokeapi.co/api/v2';
  private firstGenerationPokemons: Record<number, Pokemon> = {};

  get profile$() {
    return this.profileSubject.asObservable();
  }

  set profile(profile: TrainerProfile) {
    this.profileSubject.next(profile);
  }

  get selectedPokemons$() {
    return this.selectedPokemonsSubject.asObservable();
  }

  set selectedPokemons(pokemons: number[]) {
    this.selectedPokemonsSubject.next(pokemons);
  }

  getFirstGenerationPokemons(): Observable<Pokemon[]> {
    return forkJoin(
      Array(151)
        .fill(null)
        .map((_, index) => this.getPokemonById(index + 1, false)),
    ).pipe(
      map(
        (pokemons) =>
          pokemons.filter((pokemon) => {
            if (pokemon === null) {
              this.snackBarService.openSnackBar(
                `Error al cargar algunos o todos pokemons. Intenta de nuevo.`,
              );
              return false;
            }

            return true;
          }) as Pokemon[],
      ),
    );
  }

  getPokemonById(id: number, displayError = true): Observable<Pokemon | null> {
    const pokemon = this.firstGenerationPokemons[id];

    return pokemon
      ? of(pokemon)
      : this.http
          .get<GetPokemonResponse>(`${this.apiBaseUrl}/pokemon/${id}`)
          .pipe(
            map(({ id, name, sprites, types, stats }) => ({
              id,
              name,
              sprite: sprites.other?.home.front_default ?? '',
              type: types.map(({ type }) => type.name).join('/'),
              ...this.getStatsMap(stats),
            })),
            tap(
              (pokemon) => (this.firstGenerationPokemons[pokemon.id] = pokemon),
            ),
            catchError(() => {
              if (displayError) {
                this.snackBarService.openSnackBar(
                  `Error al cargar pokemon con id: "${id}". Intenta de nuevo.`,
                );
              }
              return of(null);
            }),
          );
  }

  private getStatsMap(stats: Stat[]): PokemonStats {
    return stats.reduce((acc, { stat, base_stat }) => {
      if (stat.name.includes('-')) {
        const [firstWord, secondWord] = stat.name.split('-');
        stat.name =
          firstWord + secondWord[0].toUpperCase() + secondWord.slice(1);
      }

      acc[stat.name as keyof PokemonStats] = base_stat;
      return acc;
    }, {} as PokemonStats);
  }
}
