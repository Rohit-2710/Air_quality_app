import { Component, ViewChild } from '@angular/core';
import { data } from '../shared/countriesData';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  capital: string;
  country: string;
  @ViewChild('sidenav') sidenav: MatSidenav;
  countries: any[] = data;
  currentData: any;
  getData = (data: any) => {
    this.currentData = data;
    this.sidenav.toggle();
    const { CountryName: country, CapitalName: capital } = data;
    [this.country, this.capital] = [country, capital];
  };
  sideNavState(data: boolean) {
    if (data) {
      this.sidenav.close();
    }
  }
}
