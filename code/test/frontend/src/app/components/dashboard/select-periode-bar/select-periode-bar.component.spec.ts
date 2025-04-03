import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPeriodeBarComponent } from './select-periode-bar.component';

describe('SelectPeriodeBarComponent', () => {
  let component: SelectPeriodeBarComponent;
  let fixture: ComponentFixture<SelectPeriodeBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectPeriodeBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectPeriodeBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
