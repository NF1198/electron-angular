import { Component, OnInit } from '@angular/core';
import { CalcModelService } from './calc/shared/calc-model.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    CalcModelService
  ]
})
export class AppComponent implements OnInit {

  constructor(private calc: CalcModelService) {
  }

  ngOnInit() {
    this.calc.handleClearAll();
  }

  handleNumber(value: number) {
    this.calc.accumulate(value);
  }

  handleOperator(value: string) {
    switch (value) {
      case 'clear':
        this.calc.handleClearAll();
        break;
      case 'enter':
        this.calc.handleEnter();
        break;
      case '.':
        this.calc.handleDecimal();
        break;
      case '/':
        this.calc.handleDivide();
        break;
      case '*':
        this.calc.handleMultiply();
        break;
      case '+':
        this.calc.handlePlus();
        break;
      case '-':
        this.calc.handleMinus();
        break;
    }
  }

}
