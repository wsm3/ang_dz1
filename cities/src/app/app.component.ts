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

import {City} from './shared/cities-datas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  public activeCity: City;
  public filter:string;

  ngOnInit() {
   // this.Cities$.subscribe()
  }

  public setActiveCity(c: City) {
    this.activeCity = c;
  }

  public setFilter(filter:string) {
    this.filter = (filter == 'ALL') ? '' : filter ;
  }
}
