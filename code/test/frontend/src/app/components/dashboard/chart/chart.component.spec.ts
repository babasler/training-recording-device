import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastActivityComponent } from './chart.component';

describe('LastActivityComponent', () => {
  let component: LastActivityComponent;
  let fixture: ComponentFixture<LastActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastActivityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
