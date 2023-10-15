import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [HomePageComponent],
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
