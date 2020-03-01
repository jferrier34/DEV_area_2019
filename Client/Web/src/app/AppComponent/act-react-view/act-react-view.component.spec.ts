import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActReactViewComponent } from './act-react-view.component';

describe('ActReactViewComponent', () => {
  let component: ActReactViewComponent;
  let fixture: ComponentFixture<ActReactViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActReactViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActReactViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
