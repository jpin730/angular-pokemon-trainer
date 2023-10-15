import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, forkJoin, map, of, tap } from 'rxjs';
import { TrainerProfile } from '../interfaces/trainer-profile';
import { HttpClient } from '@angular/common/http';
import { GetPokemonResponse, Stat } from '../interfaces/poke-api-response';
import { Pokemon, PokemonStats } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonTrainerService {
  private http = inject(HttpClient);

  // TODO: Remove this mock
  private profileSubject = new BehaviorSubject<TrainerProfile | null>({
    name: 'Jaime Pineda',
    hobby: 'Ver series',
    birthday: '1995-11-25',
    document: '123123123',
    image: '',
  });
  // TODO: Remove this mock
  private selectedPokemonsSubject = new BehaviorSubject<number[]>([1, 2, 3]);
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
        .map((_, index) => this.getPokemonById(index + 1)),
    );
  }

  getPokemonById(id: number): Observable<Pokemon> {
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
          );
  }

  private getStatsMap(stats: Stat[]): PokemonStats {
    return stats.reduce((acc, { stat, base_stat }) => {
      acc[stat.name as keyof PokemonStats] = base_stat;
      return acc;
    }, {} as PokemonStats);
  }
}
