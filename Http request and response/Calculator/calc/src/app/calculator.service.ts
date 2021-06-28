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

  postSum(calculatorRequestModel: CalculatorRequestModel):  Observable<any> {
    return this.http.post<CalculatorResponseModel>('http://localhost:8080/add' ,calculatorRequestModel );
  }

  postSub(calculatorRequestModel: CalculatorRequestModel):  Observable<any> {
    return this.http.post<CalculatorResponseModel>('http://localhost:8080/sub' ,calculatorRequestModel );
  }

  postProd(calculatorRequestModel: CalculatorRequestModel):  Observable<any> {
    return this.http.post<CalculatorResponseModel>('http://localhost:8080/mul',calculatorRequestModel );
  }

  postDiv(calculatorRequestModel: CalculatorRequestModel):  Observable<any> {
    return this.http.post<CalculatorResponseModel>('http://localhost:8080/div',calculatorRequestModel );
  }

  
}