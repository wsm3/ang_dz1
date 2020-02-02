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


  @ViewChild('weather_widget', {static: false})
  public weather_widget: TemplateRef<any>;

  @ViewChild('ww_content', {read: ViewContainerRef, static: true})
  public ww_content: ViewContainerRef;

  @ViewChild('info_widget', {static: false})
  public info_widget: TemplateRef<any>;

  @ViewChild('iw_content', {read: ViewContainerRef, static: true})
  public iw_content: ViewContainerRef;


  constructor() {
  }

  ngOnInit() {
    console.log(this.CIN.getAllData());
    this.listCities = this.CIN.getAllData();
  }


  public setActiveCity(c: City) {
    console.log(c);
    this.activeCity = c;

    Promise.resolve().then(() => {
      this.ww_content.clear();
      this.ww_content.createEmbeddedView(this.weather_widget, {
        weather_value: this.activeCity.weather
      });
    });


    Promise.resolve().then(() => {
      this.iw_content.clear();
      this.iw_content.createEmbeddedView(this.info_widget, {
        img : this.activeCity.img,
        area : this.activeCity.area,
        population: this.activeCity.population
      });
    });
  }


  ngAfterContentInit(): void {
  }

  ngAfterViewInit(): void {

  }


}
