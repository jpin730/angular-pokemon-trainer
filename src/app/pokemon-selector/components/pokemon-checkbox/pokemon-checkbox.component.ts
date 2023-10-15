import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Pokemon } from 'src/app/core/interfaces/pokemon';

@Component({
  selector: 'app-pokemon-checkbox',
  templateUrl: './pokemon-checkbox.component.html',
  styleUrls: ['./pokemon-checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonCheckboxComponent {
  @Input() pokemon!: Pokemon;
  @Input() disabled!: boolean;
  @Input() selectedPokemons!: number[];
  @Output() changeSelection = new EventEmitter<Event>();
}
