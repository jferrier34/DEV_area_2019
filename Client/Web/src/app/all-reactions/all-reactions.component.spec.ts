import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllReactionsComponent } from './all-reactions.component';

describe('AllReactionsComponent', () => {
  let component: AllReactionsComponent;
  let fixture: ComponentFixture<AllReactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllReactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllReactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
