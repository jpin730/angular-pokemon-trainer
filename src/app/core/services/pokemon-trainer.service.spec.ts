import { TestBed } from '@angular/core/testing';

import { PokemonTrainerService } from './pokemon-trainer.service';

describe('PokemonTrainerService', () => {
  let service: PokemonTrainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonTrainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
