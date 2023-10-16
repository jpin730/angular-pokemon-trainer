import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { PokemonViewerComponent } from './components/pokemon-viewer/pokemon-viewer.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonColorPipe } from './pipes/pokemon-color.pipe';
import { PokemonTypePipe } from './pipes/pokemon-type.pipe';

@NgModule({
  declarations: [
    HomePageComponent,
    PokemonViewerComponent,
    PokemonCardComponent,
    PokemonColorPipe,
    PokemonTypePipe,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    SharedModule,
    NgxMaskPipe,
    NgOptimizedImage,
  ],
  providers: [provideNgxMask()],
})
export class HomeModule {}
