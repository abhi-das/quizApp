import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'single-choice',
  templateUrl: './single-choice.component.html',
  styleUrls: ['./single-choice.component.scss'],
  inputs: ['qz','index','isLastQ','navigateNext']
})
export class SingleChoiceComponent implements OnInit {

  eleRef: ElementRef;
  myGroup: FormGroup;
  ctrlName: string;

  @Input() index: string;

  constructor(private _scrollToService: ScrollToService, private eRef: ElementRef) {}

  ngOnInit() {

    // this.eleRef = this.eRef.nativeElement;
    // // console.log(this.eleRef);
    // this.ctrlName = 'schoice'+this.index;

    // console.log(this.index);

    // this.myGroup = new FormGroup({
    //   schoice1: new FormControl()
    // })

  }

  public navTo(navId) {

  	const config: ScrollToConfigOptions = {
      target: navId
    };
 
    this._scrollToService.scrollTo(config);
  }


}
