import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostMessagePage } from './post-message.page';

describe('PostMessagePage', () => {
  let component: PostMessagePage;
  let fixture: ComponentFixture<PostMessagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostMessagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostMessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
