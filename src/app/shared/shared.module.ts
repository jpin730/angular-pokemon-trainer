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
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ProgressPipe } from './pipes/progress.pipe';

const components = [
  ImageUploaderComponent,
  ImageViewerComponent,
  MainLayoutComponent,
  TrainerCardComponent,
  LoaderComponent,
  ProgressBarComponent,
];

const pipes = [AgePipe, ProgressPipe];

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
