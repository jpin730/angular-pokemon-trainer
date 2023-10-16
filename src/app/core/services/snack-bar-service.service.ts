import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackBarServiceService {
  private snackBar = inject(MatSnackBar);

  openSnackBar(message: string, action = 'Cerrar') {
    this.snackBar.open(message, action);
  }
}
