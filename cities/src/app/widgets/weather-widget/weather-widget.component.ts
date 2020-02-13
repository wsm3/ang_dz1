import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {City} from "../../shared/cities-datas";

@Component({
  selector: 'app-weather-widget',
  template: '<span *ngIf="activeCity?.weather"><div class="temperatur">\n' +
    '    <h5>Et harum quidem</h5>\n' +
    '    <span class="w-line"> </span>\n' +
    '    <h2>{{ activeCity.weather }}<sup class="degree">°</sup></h2>\n' +
    '    <h6>Water 20<sup class="degree">°</sup></h6>\n' +
    '</div></span>',
  encapsulation: ViewEncapsulation.None
})
export class WeatherWidgetComponent implements OnInit {
  @Input('activeCity') activeCity: City;
  ngOnInit(): void {}
}
