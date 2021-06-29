import { Component, OnInit } from '@angular/core';
import { CalculatorRequestModel } from './calculator_request';

import  {FormControl, FormGroup, Validators } from '@angular/forms';
import { CalculatorService } from '../calculator.service';
import { CalculatorResponseModel } from './calculator_response';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  calcRequestModel: CalculatorRequestModel ;
  calcResponseModel: CalculatorResponseModel ;
  calcForm: FormGroup;
  result:number;
  
  constructor(private calcService : CalculatorService) { 
    this.calcRequestModel = {
      firstNumber:0,
      secondNumber:0,
    
      
      }
  }

  ngOnInit(): void {
    this.calcForm = new FormGroup({
      firstNumber: new FormControl(''),
      secondNumber: new FormControl(''),
 
    });
    
  }

 add()
 {
  this.calcRequestModel.firstNumber = this.calcForm.get('firstNumber').value;
  this.calcRequestModel.secondNumber = this.calcForm.get('secondNumber').value;
  this.calcService.postSum( this.calcRequestModel).subscribe(data =>{
    this.calcResponseModel=data;
    this.result=this.calcResponseModel.result;
  });

 }

 sub(){
  this.calcRequestModel.firstNumber = this.calcForm.get('firstNumber').value;
  this.calcRequestModel.secondNumber = this.calcForm.get('secondNumber').value;
  this.calcService.postSub( this.calcRequestModel).subscribe(data =>{
    this.calcResponseModel=data;
    this.result=this.calcResponseModel.result;

  });
 }

 mul(){
  this.calcRequestModel.firstNumber = this.calcForm.get('firstNumber').value;
  this.calcRequestModel.secondNumber = this.calcForm.get('secondNumber').value;
  this.calcService.postProd( this.calcRequestModel).subscribe(data =>{
    this.calcResponseModel=data;
    this.result=this.calcResponseModel.result;
  });
 }
 div(){
  this.calcRequestModel.firstNumber = this.calcForm.get('firstNumber').value;
  this.calcRequestModel.secondNumber = this.calcForm.get('secondNumber').value;
  this.calcService.postDiv( this.calcRequestModel).subscribe(data =>{
    this.calcResponseModel=data;
    this.result=this.calcResponseModel.result;
  });
 }
}
