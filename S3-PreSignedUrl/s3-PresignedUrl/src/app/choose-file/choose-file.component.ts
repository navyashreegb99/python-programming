import { Component, OnInit } from '@angular/core';
import { FileUploaderService } from '../file-uploader.service';
import AWS from 'aws-sdk';
import { Console } from 'console';
@Component({
  selector: 'app-choose-file',
  templateUrl: './choose-file.component.html',
  styleUrls: ['./choose-file.component.css']
})
export class ChooseFileComponent implements OnInit {
  shortLink: string = "";
	loading: boolean = false; // Flag variable
	file: any =null; // Variable to store file
	s3:any;
	credentials = {
		accessKeyId: 'AKIAXYHG7V2ZRIC45MML',
		secretAccessKey : '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',
    region: 'us-east-2'
	};
	presignedPUTURL :any;
	
   params = { 
    Bucket: 'test098',
    Delimiter: '/'
   
   }
   Objects:any=[
     'Object1',
     'Object2',
     'Object3',
     'Object4'
   ]
  ObjectSelected: any;
  presignedGETURL: any;

   

	// Inject service
	constructor(private fileUploadService: FileUploaderService) {
		this.s3 = new AWS.S3(this.credentials);

   
	 }
   

  listObjects(){
  this.s3.listObjects(this.params, function (err: any, data: any) {
      if(err)throw err;
    console.log(data);
      });
  }

	ngOnInit(): void {
		AWS.config.update({credentials: this.credentials});
    //this.listObjects();
	}

	// On file Select
	onChange(event:any) {
		this.file = event.target.files[0];
	}

	// OnClick of button Upload
	onUpload() {
		this.loading = !this.loading;
		console.log(this.file.name);
		this.presignedPUTURL = this.s3.getSignedUrl('putObject', {
			Bucket: 'test098',
			Key: this.file.name, //filename
			Expires: 100 //time to expire in seconds
		});


    console.log(this.presignedPUTURL);
		this.fileUploadService.upload(this.file,this.presignedPUTURL).subscribe(data=>{
    console.log(data);
    }
    );
    
   // this.listObjects();
	}

  download(event:any){
    this.ObjectSelected=event.target.value;
    console.log(this.ObjectSelected);

  }

  getPresignedUrl()
  {
  this.presignedGETURL = this.s3.getSignedUrl('getObject', {
      Bucket: 'test098',
      Key: 'abc.txt', //filename
      Expires: 1000//time to expire in seconds
  });
  console.log(this.presignedGETURL);

  }
	
 

}
