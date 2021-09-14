import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TreeService {

  constructor(private http: HttpClient) { }

  jsonUrl = 'assets/tree.json';

getJson() {
  return this.http.get<any>(this.jsonUrl);
}
}
