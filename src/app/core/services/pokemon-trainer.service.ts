import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, forkJoin, map, tap } from 'rxjs';
import { TrainerProfile } from '../interfaces/trainer-profile';
import { HttpClient } from '@angular/common/http';
import { GetPokemonResponse, Stat } from '../interfaces/poke-api-response';
import { Pokemon, PokemonStats } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonTrainerService {
  private http = inject(HttpClient);

  private profileSubject = new BehaviorSubject<TrainerProfile | null>(null);
  private apiBaseUrl = 'https://pokeapi.co/api/v2';
  private firstGenerationPokemons: Record<number, Pokemon> = {};

  get profile$() {
    return this.profileSubject.asObservable();
  }

  set profile(profile: TrainerProfile) {
    this.profileSubject.next(profile);
  }

  getFirstGenerationPokemons(): Observable<Pokemon[]> {
    return forkJoin(
      Array(151)
        .fill(null)
        .map((_, index) => this.getPokemonById(index + 1)),
    );
  }

  getPokemonById(id: number): Observable<Pokemon> {
    return this.http
      .get<GetPokemonResponse>(`${this.apiBaseUrl}/pokemon/${id}`)
      .pipe(
        map(({ id, name, sprites, types, stats }) => ({
          id,
          name,
          sprite: sprites.other?.home.front_default ?? '',
          type: types.map(({ type }) => type.name).join('/'),
          ...this.getStatsMap(stats),
        })),
        tap((pokemon) => (this.firstGenerationPokemons[pokemon.id] = pokemon)),
      );
  }

  private getStatsMap(stats: Stat[]): PokemonStats {
    return stats.reduce((acc, { stat, base_stat }) => {
      acc[stat.name as keyof PokemonStats] = base_stat;
      return acc;
    }, {} as PokemonStats);
  }
}
