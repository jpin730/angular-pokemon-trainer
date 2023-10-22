import { Directive, ElementRef, inject } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'mat-error',
})
export class MatErrorDirective {
  private readonly el: ElementRef<HTMLElement> = inject(ElementRef);

  setTextContent(errors?: ValidationErrors | null) {
    if (!errors) return;

    this.el.nativeElement.textContent = this.parseErrors(errors);
  }

  private parseErrors(errors: ValidationErrors): string {
    const error = Object.keys(errors).at(0);

    switch (error) {
      case 'required':
        return 'Field is required';

      case 'mask':
        return 'Field does not match the format';

      default:
        return '';
    }
  }
}
