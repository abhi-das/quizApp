import { Component, OnInit, Input } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.scss'],
  inputs: ['qz','index','isLastQ','navigateNext', 'headerSectionFormGroup', 'fieldName']
})
export class MultipleChoiceComponent implements OnInit {

  private newFormControl: FormControl;
  private selectedValue: string;

  @Input() headerSectionFormGroup: FormGroup;
  @Input() fieldName: string;

  constructor(private _scrollToService: ScrollToService) {}

  ngOnInit() {

    this.newFormControl = new FormControl(this.selectedValue, Validators.required);
    this.headerSectionFormGroup.addControl(this.fieldName, this.newFormControl);
  }

  navTo($ev, navId) {

  	this.selectedValue = $ev.target.value;
    this.newFormControl.setValue(this.selectedValue);

    if(navId) {

      const config: ScrollToConfigOptions = {
        target: navId
      };
   
      this._scrollToService.scrollTo(config);
    }
  }
}
