import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { GroceryService } from './services/grocery.service';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showSidebar: boolean = true;
  showNavbar: boolean = true;
  showFooter: boolean = true;
  showHeader: boolean = true;
  showSlider: boolean = true;
  showCart: boolean = true;
  showaboutUs: boolean = true;
  title = 'Frontend';

  constructor(private router: Router,
    private route: ActivatedRoute,
    private groceryService: GroceryService,
    private commonService: CommonService) {

    // Removing Sidebar, Navbar, Footer for Documentation, Error and Auth pages
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        // Show Login Page when no user login:
        if ((event['url'] == '/login') || (event['url'] == '/register') || (event['url'] == '/cart') || (event['url'] == '/grocery') || (event['url'] == '/grocery/groceryDetails/:Id') ||
          (event['url'] == '/about-us') || (event['url'] == '/faq') || (event['url'] == '/help-support')
          || (event['url'] == '/profile')) {
          this.showSidebar = false;
          // this.showNavbar = false;
          this.showHeader = false;
          this.showFooter = false;
          this.showSlider = false;
          this.showCart = false;
          this.showaboutUs = false;

        } else {
          this.showSidebar = true;
          this.showHeader = true;
          this.showFooter = true;
          this.showSlider = true;
          this.showCart = true;
          this.showaboutUs = true;
        }
      }
    });

  }

  ngOnInit() {
  }

}

