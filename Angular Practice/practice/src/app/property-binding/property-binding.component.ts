import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `<div>
  <input [id]="myId" type="text" value="Navya">
  <input [disabled]="isDisabled" id="{{myId}}" type="text" value="Navya">
  <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="Navya">



</div>
`,
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  public myId="testId";
  public isDisabled="false";
  constructor() { }

  ngOnInit(): void {
  }

}
