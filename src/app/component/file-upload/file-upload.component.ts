import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  fileUploadUrl="http://localhost:8085/excelDump/upload";
  constructor(private _http:HttpClient) {
    
   }

  ngOnInit(): void {
  }

  file:any;
  flag = true;

  selectFile(event:any){
    this.file = event.target.files[0];
    console.log(event);
  }

  uploadFile(){
    let formData = new FormData();
    formData.append('File',this.file);

    this._http.post(`this.fileUploadUrl`,formData).subscribe(
      (data:any)=>{

        alert("File is Uploaded");
      },
      (error) => {
        alert("Error Occured");
      });
  }
}
