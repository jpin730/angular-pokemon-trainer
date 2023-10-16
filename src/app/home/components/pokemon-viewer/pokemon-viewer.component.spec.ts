import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonViewerComponent } from './pokemon-viewer.component';

describe('PokemonViewerComponent', () => {
  let component: PokemonViewerComponent;
  let fixture: ComponentFixture<PokemonViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonViewerComponent],
    });
    fixture = TestBed.createComponent(PokemonViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
