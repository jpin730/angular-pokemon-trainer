import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSelectorPageComponent } from './pokemon-selector-page.component';

describe('PokemonSelectorPageComponent', () => {
  let component: PokemonSelectorPageComponent;
  let fixture: ComponentFixture<PokemonSelectorPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonSelectorPageComponent],
    });
    fixture = TestBed.createComponent(PokemonSelectorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
