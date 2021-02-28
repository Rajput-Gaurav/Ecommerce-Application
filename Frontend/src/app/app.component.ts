import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showSidebar: boolean = true;
  showNavbar: boolean = true;
  showFooter: boolean = true;
  title = 'Frontend';

  constructor(private router: Router) {

    // Removing Sidebar, Navbar, Footer for Documentation, Error and Auth pages
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        // Show Login Page when no user login:
        if ((event['url'] == '/login') || (event['url'] == '/register')) {
          this.showSidebar = false;
          this.showNavbar = false;
          this.showFooter = false;

        } else {
          this.showSidebar = true;
          this.showNavbar = true;
          this.showFooter = true;
        }
      }
    });
  }
}

