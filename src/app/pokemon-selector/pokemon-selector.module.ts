import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonSelectorRoutingModule } from './pokemon-selector-routing.module';
import { PokemonSelectorPageComponent } from './pages/pokemon-selector-page/pokemon-selector-page.component';

@NgModule({
  declarations: [PokemonSelectorPageComponent],
  imports: [CommonModule, PokemonSelectorRoutingModule],
})
export class PokemonSelectorModule {}
