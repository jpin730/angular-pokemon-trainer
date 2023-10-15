import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCheckboxComponent } from './pokemon-checkbox.component';

describe('PokemonCheckboxComponent', () => {
  let component: PokemonCheckboxComponent;
  let fixture: ComponentFixture<PokemonCheckboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonCheckboxComponent],
    });
    fixture = TestBed.createComponent(PokemonCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
