import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FluctuationDollar2Page } from './fluctuation-dollar2.page';

describe('FluctuationDollar2Page', () => {
  let component: FluctuationDollar2Page;
  let fixture: ComponentFixture<FluctuationDollar2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluctuationDollar2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FluctuationDollar2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
