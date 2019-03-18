import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadButtonComponent } from './load-button.component';

describe('LoadButtonComponent', () => {
  let component: LoadButtonComponent;
  let fixture: ComponentFixture<LoadButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
