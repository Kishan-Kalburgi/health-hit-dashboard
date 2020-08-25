import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

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
    BrowserModule,
    ChartsModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
