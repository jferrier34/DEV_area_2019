import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YammerReactionsPage } from './yammer-reactions.page';

describe('YammerReactionsPage', () => {
  let component: YammerReactionsPage;
  let fixture: ComponentFixture<YammerReactionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YammerReactionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YammerReactionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
