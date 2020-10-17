import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesihaveworkedComponent } from './languagesihaveworked.component';

describe('LanguagesihaveworkedComponent', () => {
  let component: LanguagesihaveworkedComponent;
  let fixture: ComponentFixture<LanguagesihaveworkedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguagesihaveworkedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagesihaveworkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
