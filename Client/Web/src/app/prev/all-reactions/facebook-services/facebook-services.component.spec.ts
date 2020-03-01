import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookServicesComponent } from './facebook-services.component';

describe('FacebookServicesComponent', () => {
  let component: FacebookServicesComponent;
  let fixture: ComponentFixture<FacebookServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
