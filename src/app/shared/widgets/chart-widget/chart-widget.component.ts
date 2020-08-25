import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { HealtHitModel } from '../../models/healt-hit.model';
import { StatisticsContants } from '../../constants/statistics-legends.constants';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-chart-widget',
  templateUrl: './chart-widget.component.html',
  styleUrls: ['./chart-widget.component.scss']
})
export class ChartWidgetComponent implements OnInit, OnChanges {

  @Input() healthHit: HealtHitModel;

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [
    StatisticsContants.atleast_one_measure,
    StatisticsContants.immunization_measure,
    StatisticsContants.reportable_lab_results_measure,
    StatisticsContants.syndromic_surveillance_measure,
    StatisticsContants.registry_measure
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
            label: 'Period Year 2015'
          }
        ];
      }
    }
  }

  parseNumber(value: string): number {
    return value !== '' ? parseFloat(value) : 0;
  }
}
