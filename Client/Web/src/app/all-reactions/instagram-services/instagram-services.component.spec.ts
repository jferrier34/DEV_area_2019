import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramServicesComponent } from './instagram-services.component';

describe('InstagramServicesComponent', () => {
  let component: InstagramServicesComponent;
  let fixture: ComponentFixture<InstagramServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstagramServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
