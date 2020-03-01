import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PublishPostTwitterPage } from './publish-post-twitter.page';

describe('PublishPostTwitterPage', () => {
  let component: PublishPostTwitterPage;
  let fixture: ComponentFixture<PublishPostTwitterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishPostTwitterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PublishPostTwitterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
