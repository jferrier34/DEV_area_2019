import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FluctuationDollarPage } from './fluctuation-dollar.page';

describe('FluctuationDollarPage', () => {
  let component: FluctuationDollarPage;
  let fixture: ComponentFixture<FluctuationDollarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluctuationDollarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FluctuationDollarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
