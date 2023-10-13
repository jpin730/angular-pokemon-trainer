import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [MainLayoutComponent],
  exports: [MainLayoutComponent],
  imports: [CommonModule, MaterialModule, NgOptimizedImage],
})
export class SharedModule {}
