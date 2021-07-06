import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import {  ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  @Input() dep:any;
  DepartmentId!: string;
  DepartmentName!: string;

  constructor(private service:SharedService,private activateRoute:ActivatedRoute) { 
    this.dep= this.activateRoute.snapshot.params.dep;
    console.log(this.dep);
  }

  ngOnInit(): void {
    this.DepartmentId=this.dep.DepartmentId;
    this.DepartmentName=this.DepartmentName;
  }

  addDepartment(){
    var val = {DepartmentId:this.DepartmentId,
                DepartmentName:this.DepartmentName};
    this.service.addDepartment(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateDepartment(){
    var val = {DepartmentId:this.DepartmentId,
      DepartmentName:this.DepartmentName};
    this.service.updateDepartment(val).subscribe(res=>{
    alert(res.toString());
    });
  }
}
