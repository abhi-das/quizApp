import { Component, OnInit, ElementRef } from '@angular/core';

import { WindowRef } from '../../services/window.service';

@Component({
  selector: 'single-choice',
  templateUrl: './single-choice.component.html',
  styleUrls: ['./single-choice.component.scss']
})
export class SingleChoiceComponent implements OnInit {

	hostEl: HTMLElement;

  constructor(private _el:ElementRef, private _win: WindowRef) { }

  ngOnInit() {

  	this.hostEl = (<HTMLElement>this._el.nativeElement);
  	
  }

  testMethod() {

  	// console.log(this.hostEl.parentNode);
  	var ss = this._win;
  	var currentYPos = ss.nativeWindow.pageYOffset;
  	var newYPos = currentYPos + this.hostEl.parentNode.nextSibling.offsetHeight + this.hostEl.parentNode.offsetHeight - 50;

	var int = setInterval(function() {
		ss.nativeWindow.scrollTo(0, currentYPos);
		currentYPos += 10;
		if (currentYPos >= newYPos) clearInterval(int);
	}, 10);

  }

}
