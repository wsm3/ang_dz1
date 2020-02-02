import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

import { City } from '../shared/cities-datas';         //TODO: Use Services

@Component({
  selector: 'app-mainlist',
  templateUrl: './mainlist.component.html',
  styleUrls: ['./mainlist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainlistComponent implements OnInit {

  @Output()
  public activeCity:EventEmitter<City> = new EventEmitter<City>();

  @Input()
  public listcs: City[];

  public selectedIndex: number = null;

  constructor() { }

  ngOnInit() {}

  public  selectCity(ct:City, idx:number) {
    console.log(ct)
    this.activeCity.emit(ct);
    this.selectedIndex = idx;
  }


}


