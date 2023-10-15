import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonSelectorRoutingModule } from './pokemon-selector-routing.module';
import { PokemonSelectorPageComponent } from './pages/pokemon-selector-page/pokemon-selector-page.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [PokemonSelectorPageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    PokemonSelectorRoutingModule,
    RouterModule,
    SharedModule,
    NgxMaskPipe,
  ],
  providers: [provideNgxMask()],
})
export class PokemonSelectorModule {}
