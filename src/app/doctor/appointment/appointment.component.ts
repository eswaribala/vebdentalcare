import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../_services/auth.service";
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  appointmentFormGroup:FormGroup;
  appointmentsArray:any;
  doctors:any;
  mobileNo:any;
  isSuccessful = false;
  constructor(public fb: FormBuilder,private authService:AuthService) {

}

  ngOnInit(): void {
        //throw new Error('Method not implemented.');
    this.appointmentFormGroup = this.fb.group({
      published: true,
      mobileNo:0,
      appointments: this.fb.array([]),
    });
   this.authService.getDoctors().subscribe(response=>{
     this.doctors=response;
   })

    }

  /*################ Registration Form ################*/


  /*############### Add Dynamic Elements ###############*/
  get days() {
    return this.appointmentFormGroup.get('days') as FormArray
  }

  get fromTimes() {
    return this.appointmentFormGroup.get('fromTimes') as FormArray
  }
  get toTimes() {
    return this.appointmentFormGroup.get('toTimes') as FormArray
  }
  addItems() {
    this.appointmentsArray = this.appointmentFormGroup.controls.appointments as FormArray;
    this.appointmentsArray.push(this.fb.group({
      day: '',
     fromTime: '',
      toTime:''
    }));
  }
  deleteItems() {
    console.log("Hi");
    //this.appointmentFormGroup.controls.appointments.reset();
    this.appointmentsArray.pop(this.fb.group({
      day: '',
      fromTime: '',
      toTime:''
    }));
  }
  // Submit Registration Form
  onSubmit() {
  //  console.log(this.mobileNo);
   // console.log(this.appointmentFormGroup.value.appointments);
    var appointmentData={
      mobileNo:this.mobileNo,
      appointments:this.appointmentFormGroup.value.appointments
    }
console.log(appointmentData);
   this.authService.addDoctorAppointments(appointmentData).subscribe(response=>
   {
     console.log(response);
     this.isSuccessful = true;
   })

  }

  getMobileNo($event: MatSelectChange) {
   this.mobileNo=$event.value;
    console.log($event.value);
  }
}
