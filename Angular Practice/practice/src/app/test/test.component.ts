import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `<h1>{{name}}</h1>
  <h2>{{2+5}}</h2>
  <h2>{{"Welcome "+ name}}</h2>
  <h2>{{name.length}}</h2>
  <h2>{{name.toLowerCase()}}</h2>
  <h2>{{greetUser()}}</h2>
  <h2>{{greetUser()}}</h2>
  <h2>{{siteUrl}}</h2>

  `,
  styles: [`
  h1{
    color:blue;
  }`]
})
export class TestComponent implements OnInit {

 public name="NAVYASHREE";
 public siteUrl=window.location.href;
  constructor() { } 

  ngOnInit(): void {
  }

  greetUser(){
    return "Hello "+this.name;
  }

}
