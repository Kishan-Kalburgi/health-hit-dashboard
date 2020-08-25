import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HealtHitModel } from '../shared/models/healt-hit.model';
import { StatisticsConstants } from '../shared/constants/app.constants';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit, OnChanges {

  @Input() healthHit: HealtHitModel;
  tableContent: { label: string, key: string }[];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['healthHit']) {
      if (this.healthHit) {
        this.tableContent = [
          { label: StatisticsConstants.atleast_one_measure, key: this.healthHit.atleast_one_measure },
          { label: StatisticsConstants.immunization_measure, key: this.healthHit.immunization_measure },
          { label: StatisticsConstants.reportable_lab_results_measure, key: this.healthHit.reportable_lab_results_measure },
          { label: StatisticsConstants.syndromic_surveillance_measure, key: this.healthHit.syndromic_surveillance_measure },
          { label: StatisticsConstants.registry_measure, key: this.healthHit.registry_measure }
        ];
      }
    }
  }

}
