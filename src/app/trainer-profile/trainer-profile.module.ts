import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerProfilePageComponent } from './pages/trainer-profile-page/trainer-profile-page.component';
import { TrainerProfileRoutingModule } from './trainer-profile-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [TrainerProfilePageComponent],
  imports: [
    CommonModule,
    TrainerProfileRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    NgxMaskDirective,
  ],
  providers: [provideNgxMask()],
})
export class TrainerProfileModule {}
