import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerProfilePageComponent } from './pages/trainer-profile-page/trainer-profile-page.component';
import { TrainerProfileRoutingModule } from './trainer-profile-routing.module';

@NgModule({
  declarations: [TrainerProfilePageComponent],
  imports: [CommonModule, TrainerProfileRoutingModule],
})
export class TrainerProfileModule {}
