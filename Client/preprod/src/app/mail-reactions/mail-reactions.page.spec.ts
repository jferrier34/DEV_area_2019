import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MailReactionsPage } from './mail-reactions.page';

describe('MailReactionsPage', () => {
  let component: MailReactionsPage;
  let fixture: ComponentFixture<MailReactionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailReactionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MailReactionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
