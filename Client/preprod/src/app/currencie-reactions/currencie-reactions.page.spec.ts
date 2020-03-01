import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CurrencieReactionsPage } from './currencie-reactions.page';

describe('CurrencieReactionsPage', () => {
  let component: CurrencieReactionsPage;
  let fixture: ComponentFixture<CurrencieReactionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencieReactionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CurrencieReactionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
