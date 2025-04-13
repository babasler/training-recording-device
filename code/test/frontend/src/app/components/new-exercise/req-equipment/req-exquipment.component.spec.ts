import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqExquipmentComponent } from './req-exquipment.component';

describe('ReqExquipmentComponent', () => {
  let component: ReqExquipmentComponent;
  let fixture: ComponentFixture<ReqExquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReqExquipmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReqExquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
