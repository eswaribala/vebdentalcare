import { Component, OnInit } from '@angular/core';
import {MenuService} from "../_services/menuservice";
import {NavigationEnd, NavigationStart, Router} from "@angular/router";
import {filter, take} from "rxjs/operators";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  loading = true;

  constructor(private router:Router) {

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
