import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeatherCityPage } from './weather-city.page';

describe('WeatherCityPage', () => {
  let component: WeatherCityPage;
  let fixture: ComponentFixture<WeatherCityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherCityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherCityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
