import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `
  <h2 [style.color]="'orange'">Style binding</h2>
  <h2 [style.color]="hasError?'red' :'green' ">Style binding</h2>
  <h2 [style.color]="highlightColor">Style binding</h2>
  <h2 [ngStyle]="titleStyles">Style binding</h2>
  `,
  styles: []
})
export class StyleBindingComponent implements OnInit {

  public hasError=false;
  public highlightColor="Blue";
  public titleStyles={
    color:"Grey",
    fontStyle:"italic"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
