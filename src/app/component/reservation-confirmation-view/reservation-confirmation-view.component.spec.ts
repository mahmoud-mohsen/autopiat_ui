import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationConfirmationViewComponent } from './reservation-confirmation-view.component';

describe('ReservationConfirmationViewComponent', () => {
  let component: ReservationConfirmationViewComponent;
  let fixture: ComponentFixture<ReservationConfirmationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationConfirmationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationConfirmationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
