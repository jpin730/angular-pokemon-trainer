import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/core/interfaces/pokemon';

@Component({
  selector: 'app-pokemon-viewer',
  templateUrl: './pokemon-viewer.component.html',
  styleUrls: ['./pokemon-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonViewerComponent {
  @Input() pokemons!: Pokemon[];
}
