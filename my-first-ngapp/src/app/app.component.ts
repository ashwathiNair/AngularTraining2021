import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-ngapp';
  result: number;
  input: string;
  isOperand1Set: boolean = false;
  isOperand2Set:boolean = false;
  isOperatorSet:boolean = false;
  operand1: number;
  operand2: number;
  operator: string;
  input1:string;
  input2:string;
  isResultSet:boolean = false;
  constructor() {
    this.result = 0;
    this.operand1 = 0;
    this.operand2 = 0;
    this.input1 = '';
    this.input2 = '';
    this.operator = '';
    this.input = '';
  }

  keypress(key: string): void {
    if(this.isResultSet){
      this.input1 = this.result.toString();
      this.isResultSet = false;
      this.input2 = '';
      this.operand2 = 0;
      this.isOperand1Set = true;
      this.isOperand2Set = false;
    }
    if ((key === '+' || key === '-' || key === 'x' || key === '/') == false) {
      
      if (this.isOperand1Set == false || this.isOperatorSet == false) {
        this.input1 = this.input1 + key;
        this.isOperand1Set = true;
      }
      else {
        this.input2 = this.input2 + key;
        this.isOperand2Set = true;
      }
    }
    else {
      if(this.isOperand2Set){
        this.getResult();
        this.isOperand2Set = false;
        this.input2 = '';
        this.operand2 = 0;
      }
      if(this.isResultSet){
        this.input1 = this.result.toString();
        this.isResultSet = false;
        this.input2 = '';
        this.operand2 = 0;
        this.isOperand1Set = true;
        this.isOperand2Set = false;
      }
      
      if(this.isOperand1Set == false){
        this.input1='0';
        this.isOperand1Set = true;
      }
      this.operator = key;
      this.isOperatorSet = true;
    }
    this.input = this.input1 + this.operator + this.input2;
  }

  getResult(): void {
    this.operand1 = +this.input1;
    this.operand2 = +this.input2;
    switch (this.operator) {
      case 'x':
        this.result = this.operand1 * this.operand2;
        this.isResultSet = true;
        break;
      case '-':
        this.result = this.operand1 - this.operand2;
        this.isResultSet = true;
        break;
      case '+':
        this.result = this.operand1 + this.operand2;
        this.isResultSet = true;
        break;
      case '/':
        this.result = this.operand1 / this.operand2;
        this.isResultSet = true;
        break;

      default:
        break;
    }
  }

  init():void{
    this.result = 0;
    this.operand1 = 0;
    this.operand2 = 0;
    this.input1 = '';
    this.input2 = '';
    this.operator = '';
    this.input = '';
    this.isOperand1Set = false;
    this.isOperand2Set = false;
    this.isOperatorSet = false;
    this.isResultSet = false;
  }

  clear():void{
    this.init();
  }

}
