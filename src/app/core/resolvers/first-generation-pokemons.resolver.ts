import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { PokemonTrainerService } from '../services/pokemon-trainer.service';
import { Pokemon } from '../interfaces/pokemon';

export const firstGenerationPokemonsResolver: ResolveFn<Pokemon[]> = () =>
  inject(PokemonTrainerService).getFirstGenerationPokemons();
