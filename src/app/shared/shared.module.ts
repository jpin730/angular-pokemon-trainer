import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { TrainerCardComponent } from './components/trainer-card/trainer-card.component';
import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';
import { LoaderComponent } from './components/loader/loader.component';
import { HttpClientModule } from '@angular/common/http';
import { AgePipe } from './pipes/age.pipe';

const components = [
  ImageUploaderComponent,
  ImageViewerComponent,
  MainLayoutComponent,
  TrainerCardComponent,
  LoaderComponent,
];

const pipes = [AgePipe];

@NgModule({
  declarations: [...components, ...pipes],
  exports: [...components, ...pipes],
  imports: [
    CommonModule,
    MaterialModule,
    NgOptimizedImage,
    RouterModule,
    HttpClientModule,
  ],
})
export class SharedModule {}
