import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeatherCity2Page } from './weather-city2.page';

describe('WeatherCity2Page', () => {
  let component: WeatherCity2Page;
  let fixture: ComponentFixture<WeatherCity2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherCity2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherCity2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
