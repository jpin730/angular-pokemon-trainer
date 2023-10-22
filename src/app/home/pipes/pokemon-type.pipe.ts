import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonType',
})
export class PokemonTypePipe implements PipeTransform {
  private pokemonTypeSpanish: Record<string, string> = {
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

  private pokemonTypeEnglish: Record<string, string> = {
    bug: 'Bug',
    dark: 'Dark',
    dragon: 'Dragon',
    electric: 'Electric',
    fairy: 'Fairy',
    fighting: 'Fighting',
    fire: 'Fire',
    flying: 'Flying',
    ghost: 'Ghost',
    grass: 'Grass',
    ground: 'Ground',
    ice: 'Ice',
    normal: 'Normal',
    poison: 'Poison',
    psychic: 'Psychic',
    rock: 'Rock',
    shadow: 'Shadow',
    steel: 'Steel',
    unknown: 'Unknown',
    water: 'Water',
  };

  transform(value: string, lang: 'en' | 'es' = 'en'): string {
    return value
      .split('/')
      .map(
        (type) =>
          (lang === 'en'
            ? this.pokemonTypeEnglish[type]
            : this.pokemonTypeSpanish[type]) ?? type,
      )
      .join('/');
  }
}
