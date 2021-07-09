import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>
    Welcome {{name}}
  </h2>
  <h2 [style.color]="hasError? 'red' : 'green' ">Style Binding </h2>
  <h2 [ngStyle]="titleStyles"> Style binding2</h2>
  <h2 [style.color]="highlightColor"> Style binding 3</h2>
  <button (click)="onClick()"> Greet </button>
  {{greeting}}

  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name="navya";
  public hasError=true;
  public isSpecial=true;
  public highlightColor="orange";
  public titleStyles={
    color:"blue",
    fontStyle:"italic"
  };
  public greeting="";

  constructor() { } 

  ngOnInit(): void {
  }

  onClick(){
    this.greeting="you clicked on button";
  }

}
