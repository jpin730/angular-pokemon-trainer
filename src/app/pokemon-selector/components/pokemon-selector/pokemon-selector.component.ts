import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs';
import { Pokemon } from 'src/app/core/interfaces/pokemon';

@Component({
  selector: 'app-pokemon-selector',
  templateUrl: './pokemon-selector.component.html',
  styleUrls: ['./pokemon-selector.component.scss'],
})
export class PokemonSelectorComponent {
  @Input() pokemons: Pokemon[] = [];
  selectedPokemons: number[] = [];
  searchValue = new FormControl('', { nonNullable: true });
  filteredPokemons$ = this.searchValue.valueChanges.pipe(
    startWith(''),
    map((value) => {
      const filterValue = value.trim().toLowerCase();

      if (!filterValue) {
        return this.pokemons;
      }

      return this.pokemons.filter((pokemon) =>
        isNaN(+filterValue)
          ? pokemon.name.toLowerCase().includes(filterValue)
          : pokemon.id === +filterValue,
      );
    }),
  );
  disabled = false;

  onChangePokemonSelection(event: Event) {
    const { checked, value } = event.target as HTMLInputElement;

    if (checked) {
      this.selectedPokemons.push(+value);
    } else {
      const index = this.selectedPokemons.findIndex((id) => id === +value);
      this.selectedPokemons.splice(index, 1);
    }
    this.disabled = this.selectedPokemons.length >= 3;
  }
}
