export interface Pokemon extends PokemonStats {
  id: number;
  name: string;
  sprite: string;
  type: string;
}

export interface PokemonStats {
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
}
