import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-info-widget',
  templateUrl: './info-widget.component.html',
  styleUrls: ['./info-widget.component.css']
})
export class InfoWidgetComponent implements OnInit {
  @Input('info') info: Object;
  ngOnInit(): void {}
}
