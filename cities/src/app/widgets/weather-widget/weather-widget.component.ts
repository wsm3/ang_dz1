import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-weather-widget',
  template: '<div class="temperatur">\n' +
    '    <h5>Et harum quidem</h5>\n' +
    '    <span class="w-line"> </span>\n' +
    '    <h2>{{ weather_value }}<sup class="degree">°</sup></h2>\n' +
    '    <h6>Water 20<sup class="degree">°</sup></h6>\n' +
    '</div>',
  encapsulation: ViewEncapsulation.None
})
export class WeatherWidgetComponent implements OnInit {
  @Input('weather_value') weather_value: string;
  ngOnInit(): void {}
}
