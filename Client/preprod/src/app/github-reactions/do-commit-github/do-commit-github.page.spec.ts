import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoCommitGithubPage } from './do-commit-github.page';

describe('DoCommitGithubPage', () => {
  let component: DoCommitGithubPage;
  let fixture: ComponentFixture<DoCommitGithubPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoCommitGithubPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoCommitGithubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
