import { Component, Input, OnInit } from '@angular/core';
import { TeamLocationModel } from 'src/app/shared/TeamLocationModel';
import {EmployeeService } from '../../shared/employee.service';
import { TeamAndLocation } from './employee-request';
import { EmployeeDetails, Team } from './employee-response';
import {​​​ AgGridModule }​​​ from'ag-grid-angular';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  request!: TeamAndLocation;
  response!: Team;
  datasource!:Array<EmployeeDetails>;
  total_emp!:number;
  dose1_count:number =0;
  dose2_count:number =0;
  willing_count:number=0;
  per_dos1:number=0;
  per_dos2:number=0;
  per_willing!:number;
  summary!:string;
  colorVarTeam!: boolean;
  colorVarCity!: boolean;

  Confirmed!: number;
  Recovered!: number;
  Deceased!: number;
  Tested!: number;
  vaccinated1!:number;
  vaccinated2!:number;
  city_dose1!: number;
  city_dose2!: number;
  test_pos!:number;
  test_summary!:string;
  city_Population!:number;
  columnDefs = [
    
   
    { headerName:'Employee Name',field:'empName',sortable:true,cellStyle:  {'font-weight': '650','font-size': '14px'},unSortIcon:true},
    { headerName:'Dose One',field:'doseOne',sortable:true,cellStyle:  {'font-weight': '650','font-size': '14px'},unSortIcon:true},
    { headerName:'Dose Two',field:'doseTwo',sortable:true,cellStyle:  {'font-weight': '650','font-size': '14px'},unSortIcon:true },
    { headerName:'Willing to Come',field:'willing',sortable:true,cellStyle:  {'font-weight': '650','font-size': '14px'},unSortIcon:true }
];
  
  teamsLocs:any;



  constructor(private empService : EmployeeService) { 
   
   this.teamsLocs = {
    teamName:" ",
    location: " "
  }
  }

  ngOnInit(): void {
    this.empDetails();
    this.totalSummary();
  }
  totalSummary() {
    this.empService.Getdistricts().subscribe(data => {
      let myData= JSON.parse(JSON.stringify(data))
      console.log(myData['KA']['districts']['Bengaluru Urban']['total']['recovered']);
     if(this.teamsLocs.location==='Bengaluru')
     {
     this.Confirmed= myData['KA']['districts']['Bengaluru Urban']['total']['confirmed'];
     this.Recovered=myData['KA']['districts']['Bengaluru Urban']['total']['recovered'];
     this.Deceased=myData['KA']['districts']['Bengaluru Urban']['total']['deceased'];
     this.Tested=myData['KA']['districts']['Bengaluru Urban']['total']['tested'];
     this.vaccinated1=myData['KA']['districts']['Bengaluru Urban']['total']['vaccinated1'];
     this.vaccinated2=myData['KA']['districts']['Bengaluru Urban']['total']['vaccinated2'];
     this.city_Population=myData['KA']['districts']['Bengaluru Urban']['meta']['population'];
     
    }
    else if(this.teamsLocs.location==='Mumbai')
    {
      console.log(myData['MH']['districts']['Mumbai']['total']['confirmed']);
      this.Confirmed= myData['MH']['districts']['Mumbai']['total']['confirmed'];
     this.Recovered=myData['MH']['districts']['Mumbai']['total']['recovered'];
     this.Deceased=myData['MH']['districts']['Mumbai']['total']['deceased'];
     this.Tested=myData['MH']['districts']['Mumbai']['total']['tested'];
     this.vaccinated1=myData['MH']['districts']['Mumbai']['total']['vaccinated1'];
     this.vaccinated2=myData['MH']['districts']['Mumbai']['total']['vaccinated2'];
     this.city_Population=myData['MH']['districts']['Mumbai']['meta']['population'];
    }
    else if(this.teamsLocs.location==='Chennai')
    {
      this.Confirmed= myData['TN']['districts']['Chennai']['total']['confirmed'];
     this.Recovered=myData['TN']['districts']['Chennai']['total']['recovered'];
     this.Deceased=myData['TN']['districts']['Chennai']['total']['deceased'];
     this.Tested=myData['TN']['districts']['Chennai']['total']['tested'];
     this.vaccinated1=myData['TN']['districts']['Chennai']['total']['vaccinated1'];
     this.vaccinated2=myData['TN']['districts']['Chennai']['total']['vaccinated2'];
     this.city_Population=myData['TN']['districts']['Chennai']['meta']['population'];
    }
   // this.test_pos=(this.Confirmed-this.Recoverd);
    this.test_pos=((this.Confirmed-this.Recovered-this.Deceased)/(this.Tested))*100;
    this.city_dose1=((this.vaccinated1)/(this.city_Population-this.Deceased))*100;
    this.city_dose2=((this.vaccinated2)/(this.city_Population-this.Deceased))*100;
    console.log(this.city_dose1);
     
    if(this.test_pos<2 && this.city_dose1>40)
    {
      this.test_summary =` ${this.teamsLocs.location} is SAFE`;
      this.colorVarCity=true;
    }

    else if(this.test_pos<5 && this.city_dose1>50 && this.city_dose2>10)
    {
      this.test_summary =` ${this.teamsLocs.location} is SAFE`;
      this.colorVarCity=true;
    }
    else {
      this.test_summary =` ${this.teamsLocs.location} is NOT SAFE`;
      this.colorVarCity=false;
    }



      },
     error => {
      console.log('Error occurred');
     }
    );
   

  }


  empDetails(){
   

    this.teamsLocs.teamName=localStorage.getItem('TeamName');

    this.teamsLocs.location= localStorage.getItem('Location');
    console.log(this.teamsLocs);
    this.empService.sendTeamName(this.teamsLocs).subscribe(data=>{
      this.response=data;
      this.datasource=this.response['employees'];
      this.total_emp= this.datasource.length
      console.log(this.datasource);
   for( var ele of this.datasource){
        this.dose1_count += ele['doseOne']
      }

    for(  var ele of this.datasource){
        this.dose2_count += ele['doseTwo']
      }
        
      for(  var ele of this.datasource){
        this.willing_count += ele['willing']
      }
    console.log(this.dose1_count);
    console.log(this.dose2_count);
    console.log(this.willing_count);


     this.per_dos1 = (this.dose1_count/this.total_emp)*100

     this.per_dos2= (this.dose2_count/this.total_emp)*100
    
     this.per_willing = (this.willing_count/this.total_emp)*100
     console.log(this.per_willing);
     if (this.per_willing>80 && this.per_dos1==100)
     {
      this.colorVarTeam=true;
       this.summary =`Office is SAFE to open for ${this.teamsLocs.teamName} team of ${this.teamsLocs.location} location`;
     }

     else if(this.dose1_count==0)
     {
       console.log("Inside");
       this.summary=" ";
     }
     else{
      
      this.colorVarTeam=false;
      this.summary =`Office is NOT SAFE to open for ${this.teamsLocs.teamName} team of ${this.teamsLocs.location} location`;
     }
     

    },error => {
      console.log('Error occurred');
    })
  }
}
