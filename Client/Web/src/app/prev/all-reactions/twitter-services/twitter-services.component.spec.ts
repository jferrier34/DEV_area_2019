import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterServicesComponent } from './twitter-services.component';

describe('TwitterServicesComponent', () => {
  let component: TwitterServicesComponent;
  let fixture: ComponentFixture<TwitterServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
