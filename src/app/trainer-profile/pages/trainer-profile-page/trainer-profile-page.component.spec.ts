import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerProfilePageComponent } from './trainer-profile-page.component';

describe('TrainerProfilePageComponent', () => {
  let component: TrainerProfilePageComponent;
  let fixture: ComponentFixture<TrainerProfilePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainerProfilePageComponent],
    });
    fixture = TestBed.createComponent(TrainerProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
