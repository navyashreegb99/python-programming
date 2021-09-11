import { Component, OnInit } from '@angular/core';
import { OfficeLocService } from '../shared/office-loc.service';
import { LocationsModel } from './locationsModel';
import { throwError } from 'rxjs';
import { TeamsModel } from './TeamsModel';
import { TeamLocationModel } from '../shared/TeamLocationModel';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-office-loc',
  templateUrl: './office-loc.component.html',
  styleUrls: ['./office-loc.component.css']
})
export class OfficeLocComponent implements OnInit {

  country:boolean=true;
  Town:boolean=false;
  Team:boolean=false;
  locationName!: string;
  countries: string[] = ['UK','India','Germany','Japan','China','Malaysia'];
  locs: LocationsModel = new LocationsModel;
  teams: TeamsModel = new TeamsModel;
  teamsLocs: TeamLocationModel = new TeamLocationModel;
  teamName: any;
  

  constructor(private locService: OfficeLocService,private toastr: ToastrService,
    private activateRoute: ActivatedRoute,private router:Router) { }
  

  
  ngOnInit(): void {
  }

  city(){
            this.country=false;
            this.Town=true;
            this.locService.getLocations().subscribe(data => {
              this.locs= data;
          },
          error => {
          }
      );
  }

  team(value:any){
    this.locationName=value.target.value;
    this.Town=false;
    this.Team=true;
    this.locService.getTeams(this.locationName).subscribe(data => {
      this.teams= data;
      },
     error => {
       
     }
    );

     }


     TeamLocation(value:any){
      this.teamName=value.target.value;
       this.teamsLocs.teamName=this.teamName;
       this.teamsLocs.location=this.locationName;
        this.Team=false;
      localStorage.setItem('TeamName',this.teamsLocs.teamName);
      localStorage.setItem('Location',this.teamsLocs.location);
      console.log(localStorage.getItem('TeamName'));
      console.log(localStorage.getItem('Location'));
      this.router.navigateByUrl('/employee-details' );
     }

     nextTown(){
         if(this.country){
          this.toastr.error( "Please Select Country","Error!!");
         }
     }


     nextTeam(){
      if(this.Town){
       this.toastr.error("Please Select Location","Error!!");
      }
  }
     previousCountry(){

    this.country=true;
    this.Town=false;
     }

     previousTown(){
      this.Town=true;
      this.Team=false;
       }
}

