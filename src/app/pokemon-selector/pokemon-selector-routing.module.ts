import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonSelectorPageComponent } from './pages/pokemon-selector-page/pokemon-selector-page.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonSelectorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonSelectorRoutingModule {}
