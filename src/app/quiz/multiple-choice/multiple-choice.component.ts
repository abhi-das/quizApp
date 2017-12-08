import { Component, OnInit } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';


@Component({
  selector: 'multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.scss'],
  inputs: ['qz','index','navigateNext']
})
export class MultipleChoiceComponent implements OnInit {

  constructor(private _scrollToService: ScrollToService) {}

  ngOnInit() {
  }

  public navTo(navId) {

  	const config: ScrollToConfigOptions = {
      target: navId
    };
 
    this._scrollToService.scrollTo(config);
  }
}
