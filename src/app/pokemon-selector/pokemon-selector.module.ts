import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonSelectorRoutingModule } from './pokemon-selector-routing.module';
import { PokemonSelectorPageComponent } from './pages/pokemon-selector-page/pokemon-selector-page.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PokemonSelectorPageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    PokemonSelectorRoutingModule,
    RouterModule,
  ],
})
export class PokemonSelectorModule {}
