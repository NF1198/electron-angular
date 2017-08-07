import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcKeypadComponent } from './calc-keypad/calc-keypad.component';
import { CalcDisplayComponent } from './calc-display/calc-display.component';
import { CalcModelService } from './shared/calc-model.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CalcKeypadComponent,
    CalcDisplayComponent
  ], exports: [
    CalcKeypadComponent,
    CalcDisplayComponent
  ],
  providers: [
    CalcModelService
  ]
})
export class CalcModule { }
