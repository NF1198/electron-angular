import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'calc-keypad',
  templateUrl: './calc-keypad.component.html',
  styleUrls: ['./calc-keypad.component.css']
})
export class CalcKeypadComponent implements OnInit {

  @Output() operatorPressed = new EventEmitter();
  @Output() numberPressed = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handlePressNumber(value: number) {
    this.numberPressed.emit(value);
  }

  handleOperator(value: string) {
    this.operatorPressed.emit(value);
  }

  onKey(key: KeyboardEvent) {
    const value = key.key;
    switch (value) {
      case '/':
      case '*':
      case '-':
      case '+':
      case '.':
        this.handleOperator(value);
        break;
      case 'Enter':
        this.handleOperator('enter');
        break;
      case 'Delete':
        this.handleOperator('clear');
        break;
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        this.handlePressNumber(+value);
        break;
    }
  }

}
