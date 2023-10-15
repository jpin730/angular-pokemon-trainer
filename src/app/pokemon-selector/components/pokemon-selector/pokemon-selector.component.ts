import { Component, Input, OnInit, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map, startWith, take } from 'rxjs';
import { Pokemon } from 'src/app/core/interfaces/pokemon';
import { PokemonTrainerService } from 'src/app/core/services/pokemon-trainer.service';

@Component({
  selector: 'app-pokemon-selector',
  templateUrl: './pokemon-selector.component.html',
  styleUrls: ['./pokemon-selector.component.scss'],
})
export class PokemonSelectorComponent implements OnInit {
  private pokemonTrainerService = inject(PokemonTrainerService);
  private router = inject(Router);

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
  disabledCheckbox = false;

  ngOnInit() {
    this.pokemonTrainerService.selectedPokemons$
      .pipe(take(1))
      .subscribe((selectedPokemons) => {
        this.selectedPokemons = selectedPokemons;
        this.disabledCheckbox = this.selectedPokemons.length === 3;
      });
  }

  onChangePokemonSelection(event: Event) {
    const { checked, value } = event.target as HTMLInputElement;

    if (checked) {
      this.selectedPokemons.push(+value);
    } else {
      const index = this.selectedPokemons.findIndex((id) => id === +value);
      this.selectedPokemons.splice(index, 1);
    }

    this.disabledCheckbox = this.selectedPokemons.length === 3;
  }

  saveSelectedPokemons() {
    if (this.selectedPokemons.length !== 3) return;

    this.pokemonTrainerService.selectedPokemons = this.selectedPokemons;

    this.router.navigate(['home']);
  }
}
