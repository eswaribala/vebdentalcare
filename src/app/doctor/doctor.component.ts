import { Component, OnInit } from '@angular/core';
import {filter, take} from "rxjs/operators";
import {NavigationEnd, NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  loading:any=true;
  show:any=true;
  constructor(private router:Router) {
    router.events.pipe(filter(e => e instanceof NavigationStart), take(1))
      .subscribe((e) => {
        this.loading = false;
        //alert('loaded - this fires only once');
      });
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((rs): rs is NavigationEnd => rs instanceof NavigationEnd))
      .subscribe(event => {
        if (
          event.id === 1 &&
          event.url === event.urlAfterRedirects
        ) {
          this.loading=false;
        }
      })
  }

  panSelected() {
    this.loading=false;
  }
}
