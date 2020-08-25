import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets, GridLineOptions } from 'chart.js';
import { Label, defaultColors } from 'ng2-charts';
import { HealtHitModel } from '../../models/healt-hit.model';
import { StatisticsConstants } from '../../constants/app.constants';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-chart-widget',
  templateUrl: './chart-widget.component.html',
  styleUrls: ['./chart-widget.component.scss']
})
export class ChartWidgetComponent implements OnInit, OnChanges {

  @Input() healthHit: HealtHitModel;

  barChartOptions: ChartOptions = {
    responsive: true
  };
  barChartLabels: Label[] = [
    StatisticsConstants.atleast_one_measure,
    StatisticsConstants.immunization_measure,
    StatisticsConstants.reportable_lab_results_measure,
    StatisticsConstants.syndromic_surveillance_measure,
    StatisticsConstants.registry_measure
  ];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartData: ChartDataSets[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['healthHit']) {
      if (this.healthHit) {
        this.barChartData = [
          {
            data: [
              this.parseNumber(this.healthHit.atleast_one_measure),
              this.parseNumber(this.healthHit.immunization_measure),
              this.parseNumber(this.healthHit.reportable_lab_results_measure),
              this.parseNumber(this.healthHit.syndromic_surveillance_measure),
              this.parseNumber(this.healthHit.registry_measure)
            ],
            label: 'Period Year 2015',
            backgroundColor: '#284f88'
          }
        ];
      }
    }
  }

  parseNumber(value: string): number {
    return value !== '' ? parseFloat(value) : 0;
  }
}
