import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'calc-display',
  templateUrl: './calc-display.component.html',
  styleUrls: ['./calc-display.component.css']
})
export class CalcDisplayComponent implements OnInit {

  @Input() value: number;

  constructor() { }

  ngOnInit() {
  }

}
