import { Component, OnInit } from '@angular/core';

import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';


@Component({
  selector: 'single-choice',
  templateUrl: './single-choice.component.html',
  styleUrls: ['./single-choice.component.scss'],
  inputs: ['navigateNext', 'navigatePrev']
})
export class SingleChoiceComponent implements OnInit {


  constructor(private _scrollToService: ScrollToService) {}

  ngOnInit() {}

  navTo(navId) {
  	console.log(navId);
  	const config: ScrollToConfigOptions = {
      target: navId
    };
 
    this._scrollToService.scrollTo(config).subscribe(() => {
    	console.log('done')
    })	
  }

}
