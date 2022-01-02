import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../_services/auth.service";
import {ImageuploadService} from "../../_services/imageupload.service";

@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.component.html',
  styleUrls: ['./adddoctor.component.css']
})
export class AdddoctorComponent implements OnInit {

  isLinear = false;
  personalFormGroup: FormGroup;
  professionalFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder,private authService:AuthService,private imageUploadService:ImageuploadService) { }
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  //imgName:string;
  ngOnInit() {
    this.personalFormGroup = this._formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      mobileNo: ['', Validators.required],
      gender: ['', Validators.required],
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      email:['',Validators.required]
    });
    this.professionalFormGroup = this._formBuilder.group({
      regNo: ['', Validators.required],
      signature:['',Validators.required],
      imageName:['',Validators.required]
    });
  }


  save() {
    //console.log(this.personalFormGroup.value.dob.getYear());
    console.log(this.professionalFormGroup.value);
    var day:string="0";
    if(this.personalFormGroup.value.dob.getDate()<10)
      day="0"+this.personalFormGroup.value.dob.getDate();
    else
      day=this.personalFormGroup.value.dob.getDate();
    var calDOB=(1900+this.personalFormGroup.value.dob.getYear())+"-"+this.personalFormGroup.value.dob.getMonth()
      +"-"+day;
    console.log(calDOB);
    var doctorData={
      mobileNo:this.personalFormGroup.value.mobileNo,
      firstName:this.personalFormGroup.value.firstName,
      lastName:this.personalFormGroup.value.lastName,
      address1:this.personalFormGroup.value.address1,
      address2:this.personalFormGroup.value.address2,
      city:this.personalFormGroup.value.city,
      state:this.personalFormGroup.value.state,
      zip:this.personalFormGroup.value.zip,
      title:this.personalFormGroup.value.title,
      gender:this.personalFormGroup.value.gender,
      email:this.personalFormGroup.value.email,
      dob:calDOB,
      regNo:this.professionalFormGroup.value.regNo,
      signatureFileName:this.imageName


    }

    this.authService.doctorRegister(doctorData).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        console.log(err);
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );


  }

  onFileChanged($event: any) {
//Select File
    this.selectedFile =$event.target.files[0]
  }

  onUpload() {
    console.log(this.selectedFile);

    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
   this.imageName=this.selectedFile.name;
    //Make a call to the Spring Boot Application to save the image
    this.imageUploadService.sendImage(uploadImageData)
      .subscribe((response) => {
          console.log(response);
        }//
      );
  }

  getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.imageUploadService.getImage(this.imageName)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }
}
