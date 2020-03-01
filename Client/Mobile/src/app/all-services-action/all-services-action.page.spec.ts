import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllServicesActionPage } from './all-services-action.page';

describe('AllServicesActionPage', () => {
  let component: AllServicesActionPage;
  let fixture: ComponentFixture<AllServicesActionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllServicesActionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllServicesActionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
