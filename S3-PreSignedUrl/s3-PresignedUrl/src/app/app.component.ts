import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  
 title:string="File upload-Download S3";
	// Variable to store shortLink from api response
	constructor() { }

	ngOnInit(): void {
	}

}
