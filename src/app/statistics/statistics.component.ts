import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HealtHitModel } from '../shared/models/healt-hit.model';
import { StatisticsContants } from '../shared/constants/statistics-legends.constants';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit, OnChanges {

  @Input() healthHit: HealtHitModel;
  tableContent: { label: string, key: string }[]; // in-line interface
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['healthHit']) {
      if (this.healthHit) {
        this.tableContent = [
          { label: StatisticsContants.atleast_one_measure, key: this.healthHit.atleast_one_measure },
          { label: StatisticsContants.immunization_measure, key: this.healthHit.immunization_measure },
          { label: StatisticsContants.reportable_lab_results_measure, key: this.healthHit.reportable_lab_results_measure },
          { label: StatisticsContants.syndromic_surveillance_measure, key: this.healthHit.syndromic_surveillance_measure },
          { label: StatisticsContants.registry_measure, key: this.healthHit.registry_measure }
        ];
      }
    }
  }

}
