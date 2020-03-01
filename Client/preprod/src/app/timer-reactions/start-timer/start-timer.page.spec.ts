import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StartTimerPage } from './start-timer.page';

describe('StartTimerPage', () => {
  let component: StartTimerPage;
  let fixture: ComponentFixture<StartTimerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartTimerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StartTimerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
