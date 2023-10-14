import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerProfilePageComponent } from './pages/trainer-profile-page/trainer-profile-page.component';
import { TrainerProfileRoutingModule } from './trainer-profile-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TrainerProfilePageComponent],
  imports: [
    CommonModule,
    TrainerProfileRoutingModule,
    MaterialModule,
    SharedModule,
  ],
})
export class TrainerProfileModule {}
