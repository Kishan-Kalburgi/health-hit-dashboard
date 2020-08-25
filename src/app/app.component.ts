import { Component, OnInit } from '@angular/core';
import { HealthitService } from './shared/services/healthit.service';
import { StateModel } from './shared/models/state.model';
import { HealtHitModel } from './shared/models/healt-hit.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isLoaded = false;
  isError = false;
  states: StateModel[];
  selectedStateName = '';
  selectedStateHealthHit: HealtHitModel;

  constructor(private _healthHitService: HealthitService) { }

  ngOnInit() {
    this._healthHitService.fetchHealtHit()
      .subscribe(
        () => {
          this.isLoaded = true;
          this.states = this._healthHitService.getStateDropDawn();
        },
        (error) => this.isError = true
      );
  }

  onSelectState(stateCode: string) {
    this.selectedStateHealthHit = this._healthHitService.getSelectedStateHealthHit(stateCode);
  }
}
