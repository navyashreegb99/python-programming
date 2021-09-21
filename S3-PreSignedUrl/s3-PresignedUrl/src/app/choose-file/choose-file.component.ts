import { Component, OnInit } from '@angular/core';
import { FileUploaderService } from '../file-uploader.service';
import AWS from 'aws-sdk';

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
		accessKeyId: 'XXXXXXXXXXXX',
		secretAccessKey : 'YYYYYYYYYYYYYYYYY',
    region: 'ZZZZZZZZZZZZ'
	};
	presignedPUTURL :any;
  ObjectsArr:any=[];
	
 bucketParams = {
    Bucket : 'test098',
  };
   Objects:any=[ ]
  ObjectSelected: any;
  presignedGETURL: any;
  len!:number;
  preview:any;
  success!:boolean;

   

	// Inject service
	constructor(private fileUploadService: FileUploaderService) {
		this.s3 = new AWS.S3(this.credentials);
    this.s3.listObjects(this.bucketParams, (err:any, data:any) => {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success",data);
        this.len=data.Contents.length;
        for (let i = 0; i < this.len; i++) {
          this.ObjectsArr[i]=data.Contents[i].Key;
        }
        
      }
    });
    console.log(this.ObjectsArr);

	 }
   
	ngOnInit(): void {
		AWS.config.update({credentials: this.credentials});
   this.preview=false;
   this.success=false;
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
			Expires: 180 //time to expire in seconds
		});


    console.log(this.presignedPUTURL);
		this.fileUploadService.upload(this.file,this.presignedPUTURL).subscribe(data=>{
    console.log(data);
    if(data===null){
    this.loading=false;
    this.success=true;
    }

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
      Key: this.ObjectSelected, //filename
      Expires: 180//time to expire in seconds
  });
  console.log(this.presignedGETURL);
this.preview=true;
  }
	
 

}
