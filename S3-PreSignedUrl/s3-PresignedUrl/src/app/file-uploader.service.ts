import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FileUploaderService {


	
constructor(private http:HttpClient) { }

upload(file:any,url:any): Observable<any> {
	return this.http.put(url,file);
  }
}
