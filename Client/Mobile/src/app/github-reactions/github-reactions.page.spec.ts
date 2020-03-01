import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GithubReactionsPage } from './github-reactions.page';

describe('GithubReactionsPage', () => {
  let component: GithubReactionsPage;
  let fixture: ComponentFixture<GithubReactionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubReactionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GithubReactionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
