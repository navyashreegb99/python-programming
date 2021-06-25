import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CalculatorRequestModel } from './calculator/calculator_request';
import { Observable } from 'rxjs';
import { CalculatorResponseModel } from './calculator/calculator_response';
@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private http: HttpClient) { }

  getSum(calculatorRequestModel: CalculatorRequestModel):  Observable<any> {
    return this.http.get<CalculatorResponseModel>('http://localhost:8080/add' +calculatorRequestModel );
  }

  getSub(calculatorRequestModel: CalculatorRequestModel):  Observable<any> {
    return this.http.get<CalculatorResponseModel>('http://localhost:8080/sub' +calculatorRequestModel );
  }

  getProd(calculatorRequestModel: CalculatorRequestModel):  Observable<any> {
    return this.http.get<CalculatorResponseModel>('http://localhost:8080/mul' +calculatorRequestModel );
  }

  getDiv(calculatorRequestModel: CalculatorRequestModel):  Observable<any> {
    return this.http.get<CalculatorResponseModel>('http://localhost:8080/div' +calculatorRequestModel );
  }
}