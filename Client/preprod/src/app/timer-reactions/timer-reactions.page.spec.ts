import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TimerReactionsPage } from './timer-reactions.page';

describe('TimerReactionsPage', () => {
  let component: TimerReactionsPage;
  let fixture: ComponentFixture<TimerReactionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerReactionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TimerReactionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
