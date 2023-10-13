import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'trainer-profile',
        loadChildren: () =>
          import('./trainer-profile/trainer-profile.module').then(
            (m) => m.TrainerProfileModule,
          ),
      },
      {
        path: 'pokemon-selector',
        loadChildren: () =>
          import('./pokemon-selector/pokemon-selector.module').then(
            (m) => m.PokemonSelectorModule,
          ),
      },
      {
        path: '**',
        redirectTo: 'trainer-profile',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
