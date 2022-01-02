import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../_services/auth.service";
import {MatSelectChange} from "@angular/material/select";
import {MatDialog} from "@angular/material/dialog";
import {PatientdialogappointmentComponent} from "../patientdialogappointment/patientdialogappointment.component";
import {CalendarOptions} from "@fullcalendar/angular";
export interface DialogData {
  doctorData: any;
  patientData:any;

}
@Component({
  selector: 'app-patientappointment',
  templateUrl: './patientappointment.component.html',
  styleUrls: ['./patientappointment.component.css']
})

export class PatientappointmentComponent implements OnInit {
  Events:any = [];
  calendarOptions: CalendarOptions;
  doctors:any;
  patients:any;
  options: any;
  mobileNo:any;
  header: any;
  constructor(private authService:AuthService,public dialog: MatDialog) { }
  onDateClick(res:any) {
    alert('Clicked on date : ' + res.dateStr)
  }
  ngOnInit(): void {


    this.authService.getDoctors().subscribe(response=>{

      this.doctors=response;
      console.log(this.doctors);
    })
    this.authService.getPatients().subscribe(response=>{

      this.patients=response;
      console.log(this.patients);
    })
    setTimeout(() => {
      return this.authService.getAllPatientAppointments()
        .subscribe(res => {
        // @ts-ignore
          res.forEach(obj=>{
            var eventObj={
              "title":obj.treatment,
              "start":obj.doa
            }
          this.Events.push(eventObj);
        })


          console.log(this.Events);
          this.calendarOptions = {
            initialView: 'dayGridMonth',
            dateClick: this.onDateClick.bind(this),
            events: this.Events,
            initialDate : new Date(),
            headerToolbar: {
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            editable: true,
            selectable:true,
            selectMirror: true,
            dayMaxEvents: true
          };

        });
    }, 1000);


  }





  getMobileNo($event: MatSelectChange) {
    console.log("hi");
    this.mobileNo=$event.value;
    console.log($event.value);
  }

  openDialogAppointment() {

      const dialogRef = this.dialog.open( PatientdialogappointmentComponent , {
        width: '450px',
        data: {doctorData: this.doctors,patientData:this.patients},
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        console.log(result);
      //  this.authService.sendWhatsApp(result.patientMobileNo,result.treatment);
        this.authService.addPatientAppointment(result).subscribe(result=>{
          console.log(result);
        })

      });
    }

}
