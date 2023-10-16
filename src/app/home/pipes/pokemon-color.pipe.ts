import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonColor',
})
export class PokemonColorPipe implements PipeTransform {
  private pokemonColorByType: Record<string, string> = {
    bug: '#a6b91a',
    dark: '#705746',
    dragon: '#6f35fc',
    electric: '#f7d02c',
    fairy: '#d685ad',
    fighting: '#c22e28',
    fire: '#ee8130',
    flying: '#a98ff3',
    ghost: '#735797',
    grass: '#7ac74c',
    ground: '#e2bf65',
    ice: '#96d9d6',
    normal: '#a8a77a',
    poison: '#a33ea1',
    psychic: '#f95587',
    rock: '#b6a136',
    shadow: '#333333',
    steel: '#b7b7ce',
    unknown: '#68a090',
    water: '#6390f0',
  };

  transform(type: string): string {
    const firstType = type.split('/').at(0) ?? '';
    return (
      this.pokemonColorByType[firstType] ?? this.pokemonColorByType['unknown']
    );
  }
}
