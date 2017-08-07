import { Injectable } from '@angular/core';

@Injectable()
export class CalcModelService {

  registerA = 0; // display
  registerB = 0;
  pow10decimal = 0;
  clearOnAccumulate = true;
  pendingOp = null as () => void;

  constructor() { }

  accumulate(value: number) {
    if (this.clearOnAccumulate) {
      this.registerA = 0;
      this.clearOnAccumulate = false;
    }
    if (this.pow10decimal === 0) {
      this.registerA = this.registerA * 10 + value;
    } else {
      this.registerA += value * Math.pow(10, -(this.pow10decimal++))
    }
  }

  handleDecimal() {
    if (this.pow10decimal === 0) {
      this.pow10decimal = 1;
    }
  }

  private applyPendingOpeartion() {
    this.pow10decimal = 0;
    if (this.pendingOp) {
      this.pendingOp();
      this.pendingOp = null;
    }
  }

  handlePlus() {
    this.applyPendingOpeartion();
    this.registerB = this.registerA;
    this.pendingOp = () => this.registerB += this.registerA;
    this.clearOnAccumulate = true;
  }

  handleMinus() {
    this.applyPendingOpeartion();
    this.registerB = this.registerA;
    this.pendingOp = () => this.registerB -= this.registerA;
    this.clearOnAccumulate = true;
  }

  handleDivide() {
    this.applyPendingOpeartion();
    this.registerB = this.registerA;
    this.pendingOp = () => this.registerB /= this.registerA;
    this.clearOnAccumulate = true;
  }

  handleMultiply() {
    this.applyPendingOpeartion();
    this.registerB = this.registerA;
    this.pendingOp = () => this.registerB *= this.registerA;
    this.clearOnAccumulate = true;
  }

  handleEnter() {
    this.applyPendingOpeartion();
    this.registerA = this.registerB;
    this.clearOnAccumulate = true;
  }

  handleClearAll() {
    this.pendingOp = null;
    this.registerA = 0;
    this.registerB = 0;
  }

  handleClearEntry() {
    this.registerA = 0;
  }

}
