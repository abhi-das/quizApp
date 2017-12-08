import { Component, OnInit, ElementRef } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'single-choice',
  templateUrl: './single-choice.component.html',
  styleUrls: ['./single-choice.component.scss'],
  inputs: ['qz','index','navigateNext']
})
export class SingleChoiceComponent implements OnInit {


  constructor(private _scrollToService: ScrollToService) {}

  ngOnInit() {}

  public navTo(navId) {

  	const config: ScrollToConfigOptions = {
      target: navId
    };
 
    this._scrollToService.scrollTo(config);
  }


}
