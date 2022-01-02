import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {MenuService} from "../_services/menuservice";
import {Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from "@angular/router";
import {Observable} from "rxjs";
import {filter, map, take} from "rxjs/operators";
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public data: any;
  public show:any=true;
  loading = true;

  constructor(private menuService: MenuService,private router:Router) {

    router.events.pipe(filter(e => e instanceof NavigationStart), take(1))
      .subscribe((e) => {
        this.loading = false;
        //alert('loaded - this fires only once');
      });

  }

  ngOnInit() {
    this.loading=false;
    this.data = this.menuService.getMenuData();
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

  panelSelected() {
    this.show=false;
    this.loading = false;
  }

  panelNotSelected() {
    this.show=true;
    this.loading=true;
  }
}
