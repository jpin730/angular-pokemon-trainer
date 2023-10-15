import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { firstGenerationPokemonsResolver } from './first-generation-pokemons.resolver';
import { Pokemon } from '../interfaces/pokemon';

describe('firstGenerationPokemonsResolver', () => {
  const executeResolver: ResolveFn<Pokemon[]> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() =>
      firstGenerationPokemonsResolver(...resolverParameters),
    );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
