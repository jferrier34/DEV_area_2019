import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TwitterReactionsPage } from './twitter-reactions.page';

describe('TwitterReactionsPage', () => {
  let component: TwitterReactionsPage;
  let fixture: ComponentFixture<TwitterReactionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterReactionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TwitterReactionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
