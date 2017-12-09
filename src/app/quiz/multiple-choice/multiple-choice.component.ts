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
  private selectedArr: any[];

  @Input() headerSectionFormGroup: FormGroup;
  @Input() fieldName: string;
  @Input() qz: any;

  constructor(private _scrollToService: ScrollToService) {}

  ngOnInit() {

    var isRequired = (this.qz.required ? Validators.required : null);

    this.selectedArr = [];
    this.newFormControl = new FormControl(this.selectedArr, isRequired );
    this.headerSectionFormGroup.addControl(this.fieldName, this.newFormControl);
  }

  navTo($ev, navId) {

    if($ev.target.checked) {
    
      this.selectedArr.push($ev.target.value);

    } else {

      this.selectedArr.splice(this.selectedArr.indexOf($ev.target.value), 1);

    }

    this.newFormControl.setValue(this.selectedArr);

    if(navId) {

      const config: ScrollToConfigOptions = {
        target: navId
      };
   
      this._scrollToService.scrollTo(config);
    }
  }
}
