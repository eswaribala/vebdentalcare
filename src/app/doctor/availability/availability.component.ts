import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../_services/auth.service";
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AvailabilityComponent implements OnInit {

mobileNo:any;
  events: any[];
  doctors:any;
  options: any;

  header: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getDoctors().subscribe(response=>{
      this.doctors=response;
    })
  }


  getMobileNo($event: MatSelectChange) {
    this.mobileNo=$event.value;
    console.log($event.value);
    this.authService.getDoctorAppointments(this.mobileNo).subscribe(events => {
      this.events = events;
      console.log(this.events);
      /*
      this.options = {...this.options, ...{events: events}};
      console.log(this.options);
      this.options = {
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

       */
    });


  }
}
