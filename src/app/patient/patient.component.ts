import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";
import {filter, take} from "rxjs/operators";
import {NavigationEnd, NavigationStart, Router} from "@angular/router";
import {MenuService} from "../_services/menuservice";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  loading:any=true;
  constructor(private menuService: MenuService,private router:Router) {

    router.events.pipe(filter(e => e instanceof NavigationStart), take(1))
      .subscribe((e) => {
        this.loading = false;
        //alert('loaded - this fires only once');
      });

  }
  show:any=true;
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
