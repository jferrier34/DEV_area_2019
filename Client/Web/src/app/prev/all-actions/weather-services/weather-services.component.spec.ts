import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherServicesComponent } from './weather-services.component';

describe('WeatherServicesComponent', () => {
  let component: WeatherServicesComponent;
  let fixture: ComponentFixture<WeatherServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
