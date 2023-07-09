import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyBComponent } from './lazy-b.component';

describe('LazyBComponent', () => {
  let component: LazyBComponent;
  let fixture: ComponentFixture<LazyBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LazyBComponent]
    });
    fixture = TestBed.createComponent(LazyBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
