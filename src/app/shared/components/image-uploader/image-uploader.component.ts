import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss'],
})
export class ImageUploaderComponent {
  @ViewChild('fileInput') fileInput?: ElementRef<HTMLInputElement>;
  @Output() imageLoaded = new EventEmitter<string>();
  fileName = '';
  isLoaded = false;

  emitImage(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;

    if (files.length !== 0) {
      const file = files.item(0) as File;
      this.fileName = file.name;
      this.isLoaded = true;
      this.imageLoaded.emit(URL.createObjectURL(file));
    }
  }

  clearImage() {
    this.isLoaded = false;
    if (this.fileInput) this.fileInput.nativeElement.value = '';
    this.imageLoaded.emit('');
  }
}
