import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingExistenceViewComponent } from './waiting-existence-view.component';

describe('WaitingExistenceViewComponent', () => {
  let component: WaitingExistenceViewComponent;
  let fixture: ComponentFixture<WaitingExistenceViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitingExistenceViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingExistenceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
