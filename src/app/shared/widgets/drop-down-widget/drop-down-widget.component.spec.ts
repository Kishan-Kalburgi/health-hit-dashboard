import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownWidgetComponent } from './drop-down-widget.component';

describe('DropDownWidgetComponent', () => {
  let component: DropDownWidgetComponent;
  let fixture: ComponentFixture<DropDownWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropDownWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
