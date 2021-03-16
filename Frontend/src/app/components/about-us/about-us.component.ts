import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  lat: number = 21.1864607;
  lng: number = 72.8081281;
  zoom = 16;

  constructor() { }

  ngOnInit(): void {
  }

}
