import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Team } from '../employee-details/employee-details/employee-response';

import { TeamLocationModel } from './TeamLocationModel';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  sendTeamName(teamLoc:TeamLocationModel): Observable<any> {
    
    return this.http.post<Team>('http://localhost:8080/api/team/find',teamLoc);
  }

  Getdistricts(): Observable<any>{
 
    return this.http.get<any>( "https://api.covid19india.org/v4/min/data.min.json");
}

}
