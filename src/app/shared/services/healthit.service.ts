import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HealtHitModel } from '../models/healt-hit.model';
import { StateModel } from '../models/state.model';
import { HealthHitsApi } from '../constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class HealthitService {

  private healthHits: HealtHitModel[];
  private year = '2015';

  constructor(private _http: HttpClient) { }

  fetchHealtHit(): Observable<void> {
    return this._http.get<HealtHitModel[]>(HealthHitsApi)
      .pipe(
        map(data => {
          this.filterHealthHits(data);
        })
      );
  }

  filterHealthHits(healtHitModel: HealtHitModel[]): void {
    this.healthHits = healtHitModel.filter(e => e.period === this.year);
  }

  getStateDropDawn(): StateModel[] {
    const states = this.healthHits.map(healthHit => {
      return {
        region: healthHit.region,
        region_code: healthHit.region_code
      };
    });
    return this.removeDuplicates(states, ['region_code']);
  }

  removeDuplicates(array: StateModel[], key: string[]): StateModel[] {
    return array.filter(
      (s => o => (k => !s.has(k) && s.add(k))(key.map(k => o[k]).join('|')))(
        new Set()
      )
    );
  }

  getSelectedStateHealthHit(stateCode: string): HealtHitModel {
    return this.healthHits.find(e => e.region_code === stateCode);
  }
}
