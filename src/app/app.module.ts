import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DropDownWidgetComponent } from './shared/widgets/drop-down-widget/drop-down-widget.component';
import { ChartWidgetComponent } from './shared/widgets/chart-widget/chart-widget.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    DropDownWidgetComponent,
    ChartWidgetComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
