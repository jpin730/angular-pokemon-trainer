import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Pokemon, PokemonStats } from 'src/app/core/interfaces/pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonCardComponent {
  @Input() pokemon!: Pokemon;

  maxStats: PokemonStats = {
    hp: 255,
    attack: 190,
    defense: 230,
    specialAttack: 194,
    specialDefense: 230,
    speed: 180,
  };
}
