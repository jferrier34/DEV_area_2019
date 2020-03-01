import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllServicesReactionPage } from './all-services-reaction.page';

describe('AllServicesReactionPage', () => {
  let component: AllServicesReactionPage;
  let fixture: ComponentFixture<AllServicesReactionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllServicesReactionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllServicesReactionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
