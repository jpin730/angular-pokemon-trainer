import { NgModule } from '@angular/core';

import { ScrollingModule } from '@angular/cdk/scrolling';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatErrorDirective } from './directives/mat-error.directive';
import { MatFormFieldDirective } from './directives/mat-form-field.directive';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

import {
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MatDateFormats,
} from '@angular/material/core';
import { LuxonDateModule } from '@angular/material-luxon-adapter';

const directives = [MatErrorDirective, MatFormFieldDirective];

export const APP_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'yyyy-MM-dd',
  },
  display: {
    dateInput: 'MMM dd, yyyy',
    monthYearLabel: 'MMMM yyyy',
    dateA11yLabel: 'MMM ',
    monthYearA11yLabel: 'MMMM yyyy',
  },
};

@NgModule({
  declarations: [...directives],
  exports: [
    ...directives,
    ScrollingModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatChipsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRippleModule,
    MatSnackBarModule,
    MatTooltipModule,
    LuxonDateModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en' },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
  ],
})
export class MaterialModule {}
