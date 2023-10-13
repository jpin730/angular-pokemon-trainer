import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainerProfilePageComponent } from './pages/trainer-profile-page/trainer-profile-page.component';

const routes: Routes = [
  {
    path: '',
    component: TrainerProfilePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainerProfileRoutingModule {}
