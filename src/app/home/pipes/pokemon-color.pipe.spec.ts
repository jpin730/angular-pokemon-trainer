import { PokemonColorPipe } from './pokemon-color.pipe';

describe('PokemonColorPipe', () => {
  it('create an instance', () => {
    const pipe = new PokemonColorPipe();
    expect(pipe).toBeTruthy();
  });
});
