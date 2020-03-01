import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerServicesComponent } from './timer-services.component';

describe('TimerServicesComponent', () => {
  let component: TimerServicesComponent;
  let fixture: ComponentFixture<TimerServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
