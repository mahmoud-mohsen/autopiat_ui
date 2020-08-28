import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeViewComponent } from './typeView.component';

describe('NewcarComponent', () => {
  let component: TypeViewComponent;
  let fixture: ComponentFixture<TypeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TypeViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
