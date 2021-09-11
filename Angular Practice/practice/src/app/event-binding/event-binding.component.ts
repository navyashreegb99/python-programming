import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
  <Button (click)="OnClick($event)">Click me</Button>
  <Button (click)="greeting='Hey hi'">Button2</Button>
  {{greeting}}
  `,
  styles: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }
  public greeting=""
  ngOnInit(): void {
  }

  OnClick(event: any){
    console.log(event);
    this.greeting="You clicked me";
    this.greeting=event.type;
  }

}
