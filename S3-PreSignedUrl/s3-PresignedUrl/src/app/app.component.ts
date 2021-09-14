import { Component, OnInit } from '@angular/core';
import { FileUploaderService } from './file-uploader.service';
import AWS from 'aws-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  
 title:string="File upload-Download S3";
	// Variable to store shortLink from api response
	shortLink: string = "";
	loading: boolean = false; // Flag variable
	file: any =null; // Variable to store file
	s3:any;
	credentials = {
		accessKeyId: 'AKIAXYHG7V2Z746S5WHF',
		secretAccessKey : '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'
	
	};
	presignedPUTURL :any;
	

	// Inject service
	constructor(private fileUploadService: FileUploaderService) {
		this.s3 = new AWS.S3();
	 }

	ngOnInit(): void {
		AWS.config.update({credentials: this.credentials, region: 'us-east-1'});
	}

	// On file Select
	onChange(event:any) {
		this.file = event.target.files[0];
	}

	// OnClick of button Upload
	onUpload() {
		this.loading = !this.loading;
		console.log(this.file);
		this.presignedPUTURL = this.s3.getSignedUrl('putObject', {
			Bucket: 'test098',
			Key: this.file, //filename
			Expires: 100 //time to expire in seconds
		});
		this.fileUploadService.upload(this.file).subscribe(
			(event: any) => {
				if (typeof (event) === 'object') {

					// Short link via api response
					this.shortLink = event.link;

					this.loading = false; // Flag variable
				}
			}
		);
	}

	

}
