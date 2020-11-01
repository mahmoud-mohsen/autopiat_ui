import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCarTypeComponent } from './new-car-type.component';

describe('NewCarTypeComponent', () => {
  let component: NewCarTypeComponent;
  let fixture: ComponentFixture<NewCarTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCarTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCarTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
