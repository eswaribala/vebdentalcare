import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogData, PatientappointmentComponent} from "../patientappointment/patientappointment.component";
import {MatSelectChange} from "@angular/material/select";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../_services/auth.service";

@Component({
  selector: 'app-patientdialogappointment',
  templateUrl: './patientdialogappointment.component.html',
  styleUrls: ['./patientdialogappointment.component.css']
})
export class PatientdialogappointmentComponent implements OnInit {
  doctors:any;
  patients:any;
  mobileNo:any;
  response:any;
  searchTxt: any="B";

  patientAppointmentFormGroup:FormGroup;
  constructor(
    public dialogRef: MatDialogRef<PatientappointmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private _formBuilder: FormBuilder,private authService:AuthService
  ) {
    //console.log(data);
    this.patientAppointmentFormGroup = this._formBuilder.group({
      patientMobileNo: ['', Validators.required],
      doctorMobileNo: ['', Validators.required],
      doa: ['', Validators.required],
      chair:['',Validators.required],
      treatment: ['', Validators.required]

    });
  }

  ngOnInit(): void {
    this.doctors=this.data.doctorData;
    this.patients=this.data.patientData;
    console.log(this.doctors);
    console.log(this.patients);

  }



  onNoClick() {
    this.dialogRef.close();
  }

  getPatientMobileNo($event: MatSelectChange) {
    console.log($event);

  }

  getDoctorMobileNo($event: MatSelectChange) {
    console.log($event);
  }

  getTreatmentType($event: MatSelectChange) {

  }


}
