import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonType',
})
export class PokemonTypePipe implements PipeTransform {
  private pokemonTypeInSpanish: Record<string, string> = {
    bug: 'Bicho',
    dark: 'Siniestro',
    dragon: 'Dragón',
    electric: 'Eléctrico',
    fairy: 'Hada',
    fighting: 'Lucha',
    fire: 'Fuego',
    flying: 'Volador',
    ghost: 'Fantasma',
    grass: 'Planta',
    ground: 'Tierra',
    ice: 'Hielo',
    normal: 'Normal',
    poison: 'Veneno',
    psychic: 'Psíquico',
    rock: 'Roca',
    shadow: 'Sombra',
    steel: 'Acero',
    unknown: 'Desconocido',
    water: 'Agua',
  };

  transform(value: string): string {
    return value
      .split('/')
      .map((type) => this.pokemonTypeInSpanish[type] ?? type)
      .join('/');
  }
}
