import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../_services/auth.service";

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css']
})
export class AddpatientComponent implements OnInit {
  isLinear = false;
  personalFormGroup: FormGroup;
  historyFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder,private authService:AuthService) { }
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
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
      checkme: ['', Validators.required]
    });
    this.historyFormGroup = this._formBuilder.group({
      prevMedicalHistory: ['', Validators.required],
      prevDentalHistory:['',Validators.required]
    });
  }


  save() {
    //console.log(this.personalFormGroup.value.dob.getYear());
    console.log(this.historyFormGroup.value);
    var day:string="0";
    var month:string="0";
    if(this.personalFormGroup.value.dob.getDate()<10)
      day="0"+this.personalFormGroup.value.dob.getDate();
    else
      day=this.personalFormGroup.value.dob.getDate();
    if(this.personalFormGroup.value.dob.getMonth()<10)
      month="0"+(this.personalFormGroup.value.dob.getMonth()+1);
    else
      month=this.personalFormGroup.value.dob.getDMonth()+1;

    var calDOB=(1900+this.personalFormGroup.value.dob.getYear())+"-"+month
      +"-"+day;
   console.log(calDOB);
    var patientData={
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
     checkme:this.personalFormGroup.value.checkme,
     dob:calDOB,
     prevMedicalHistory:this.personalFormGroup.value.prevMedicalHistory,
     prevDentalHistory:this.personalFormGroup.value.prevDentalHistory


   }

    this.authService.patientRegister(patientData).subscribe(
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
}
