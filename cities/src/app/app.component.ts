import {ViewEncapsulation} from '@angular/core';

import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild, ElementRef,
  EventEmitter,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import {CitiesData} from './shared/cities-datas';   //TODO: Use Services
import {City} from './shared/cities-datas';         //TODO: Use Services

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, AfterContentInit, AfterViewInit {

  public CIN = new CitiesData();                       //TODO: Use Services


  public activeCity: City;
  public listCities: City[];
  public weather_value:string ;
  public info:Object;

  ngOnInit() {
    console.log(this.CIN.getAllData());
    this.listCities = this.CIN.getAllData();
  }

  public setActiveCity(c: City) {
    this.activeCity = c;
    this.weather_value = this.activeCity.weather;
    this.info = {
      img : this.activeCity.img,
      area : this.activeCity.area,
      population: this.activeCity.population
    };
  }

  ngAfterContentInit(): void {}
  ngAfterViewInit(): void {}
}
