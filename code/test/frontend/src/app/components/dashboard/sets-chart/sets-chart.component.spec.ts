import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetsChartComponent } from './sets-chart.component';

describe('SetsChartComponent', () => {
  let component: SetsChartComponent;
  let fixture: ComponentFixture<SetsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetsChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
