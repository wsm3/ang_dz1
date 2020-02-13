import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainlistComponent } from './widgets/mainlist/mainlist.component';
import { WeatherWidgetComponent } from './widgets/weather-widget/weather-widget.component';
import { InfoWidgetComponent } from './widgets/info-widget/info-widget.component';





@NgModule({
  declarations: [
    AppComponent,
    MainlistComponent,
    WeatherWidgetComponent,
    InfoWidgetComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
