import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `
  <h2 class="text-success">Navya</h2>
  <h2 [class]="successClass">Navya</h2>
  <h2 [class.text-danger]="hasError">Navya</h2>
  <h2 [ngClass]="messageClass">Navya</h2>
  `,
  styles: [`
  .text-success{
    color:green;
  }
  .text-danger{
    color:red;
  }
  .text-special{
   font-style:italic;
  }
  `]
})
export class ClassBindingComponent implements OnInit {

  public successClass="text-success";
  public hasError=false;
  public messageClass={
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":true
  }
  constructor() { }

  ngOnInit(): void {
  }

}
