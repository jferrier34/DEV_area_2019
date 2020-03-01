import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlappComponent } from './dlapp.component';

describe('DlappComponent', () => {
  let component: DlappComponent;
  let fixture: ComponentFixture<DlappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
