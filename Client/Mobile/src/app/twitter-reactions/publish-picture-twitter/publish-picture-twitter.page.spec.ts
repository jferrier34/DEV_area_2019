import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PublishPictureTwitterPage } from './publish-picture-twitter.page';

describe('PublishPictureTwitterPage', () => {
  let component: PublishPictureTwitterPage;
  let fixture: ComponentFixture<PublishPictureTwitterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishPictureTwitterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PublishPictureTwitterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
