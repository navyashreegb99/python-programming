import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { LocationsModel } from '../office-loc/locationsModel';
import { TeamsModel } from '../office-loc/TeamsModel';
import { Observable } from 'rxjs';
import { TeamLocationModel } from './TeamLocationModel';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OfficeLocService {
 
  teamlocation: TeamLocationModel = new TeamLocationModel;
  
 TeamLocation!: BehaviorSubject<TeamLocationModel>;

  constructor(private http: HttpClient) {
   this.TeamLocation = new BehaviorSubject(this.teamlocation);
   }


  getLocations() :Observable<LocationsModel>{
    
    return this.http.get<LocationsModel >('http://localhost:8080/api/team/locations');
  }

  getTeams(team:string):Observable<TeamsModel> {
    return this.http.get<TeamsModel>('http://localhost:8080/api/team/by-location/'+team);
  }

  


}

