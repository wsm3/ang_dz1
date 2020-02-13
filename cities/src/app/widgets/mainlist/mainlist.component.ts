import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

import {Cities$} from '../../shared/cities-datas';
import {City} from '../../shared/cities-datas';

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
  public filter:string;

  public Cities$ = Cities$;
  public selectedIndex: number = null;

  ngOnInit() {}

  public  selectCity(ct:City, idx:number) {
    this.activeCity.emit(ct);
    this.selectedIndex = idx;
  }


}


