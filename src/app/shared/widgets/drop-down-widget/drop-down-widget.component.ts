import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StateModel } from '../../models/state.model';

@Component({
  selector: 'app-drop-down-widget',
  templateUrl: './drop-down-widget.component.html',
  styleUrls: ['./drop-down-widget.component.scss']
})
export class DropDownWidgetComponent implements OnInit {

  @Input() states: StateModel[];
  @Output() selectedState = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  onSelected(stateCode: string): void {
    this.selectedState.emit(stateCode);
  }
}
