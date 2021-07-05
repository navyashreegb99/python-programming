import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  
  @Input() emp:any;
  EmployeeId!: string;
  EmployeeName!: string;
  Department!: string;
  DateOfJoining!: string;
  PhotoFileName!: string;
  PhotoFilePath!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
