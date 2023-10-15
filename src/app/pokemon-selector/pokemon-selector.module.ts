import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { PokemonSelectorRoutingModule } from './pokemon-selector-routing.module';
import { PokemonSelectorPageComponent } from './pages/pokemon-selector-page/pokemon-selector-page.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { PokemonSelectorComponent } from './components/pokemon-selector/pokemon-selector.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PokemonCheckboxComponent } from './components/pokemon-checkbox/pokemon-checkbox.component';

@NgModule({
  declarations: [
    PokemonCheckboxComponent,
    PokemonSelectorComponent,
    PokemonSelectorPageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PokemonSelectorRoutingModule,
    RouterModule,
    SharedModule,
    NgxMaskPipe,
    ReactiveFormsModule,
    NgOptimizedImage,
  ],
  providers: [provideNgxMask()],
})
export class PokemonSelectorModule {}
