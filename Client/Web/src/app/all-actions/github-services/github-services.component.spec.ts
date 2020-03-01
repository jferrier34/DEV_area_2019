import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubServicesComponent } from './github-services.component';

describe('GithubServicesComponent', () => {
  let component: GithubServicesComponent;
  let fixture: ComponentFixture<GithubServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
