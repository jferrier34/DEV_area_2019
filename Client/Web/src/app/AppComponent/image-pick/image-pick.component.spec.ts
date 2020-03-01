import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePickComponent } from './image-pick.component';

describe('ImagePickComponent', () => {
  let component: ImagePickComponent;
  let fixture: ComponentFixture<ImagePickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagePickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagePickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
