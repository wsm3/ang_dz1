import {Component, Input, OnInit} from '@angular/core';
import {City} from "../../shared/cities-datas";

@Component({
  selector: 'app-info-widget',
  templateUrl: './info-widget.component.html',
  styleUrls: ['./info-widget.component.css']
})
export class InfoWidgetComponent implements OnInit {
  @Input('activeCity') activeCity: City;
  ngOnInit(): void {}
}
