import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';

import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
import {Observable} from "rxjs";
import {filter, map, take} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[] = [];
  logoPath:string ="./assets/veblogo.jpg";
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  loading = true;
  readonly loading$: Observable<boolean> = this.router.events.pipe(
    map((event) => this.checkRouterEvent(event))
  );
  constructor(private tokenStorageService: TokenStorageService,private router:Router) {
    router.events.pipe(filter(e => e instanceof NavigationStart), take(1))
      .subscribe((e) => {
        this.loading = false;
        //alert('loaded - this fires only once');
      });
    /*this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });*/
  }
  checkRouterEvent(routerEvent: Event): boolean {
    let status:boolean = false;
    if (routerEvent instanceof NavigationStart) {
      status=true;
    }

    if (routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationError) {
      status=false
    }
    return status;
  }
  ngOnInit(): void {
   // this.loading=false;
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
     // this.roles = user.roles;
      if(window.sessionStorage.getItem("roles")!=undefined) {
        // @ts-ignore
        this.roles.push(window.sessionStorage.getItem("roles").toString());

        this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
        this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      }
      this.username = user.username;
    }

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

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
