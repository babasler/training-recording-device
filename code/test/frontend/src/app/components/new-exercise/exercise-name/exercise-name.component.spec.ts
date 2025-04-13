import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseNameComponent } from './exercise-name.component';

describe('ExerciseNameComponent', () => {
  let component: ExerciseNameComponent;
  let fixture: ComponentFixture<ExerciseNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
