import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcKeypadComponent } from './calc-keypad.component';

describe('CalcKeypadComponent', () => {
  let component: CalcKeypadComponent;
  let fixture: ComponentFixture<CalcKeypadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcKeypadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcKeypadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
