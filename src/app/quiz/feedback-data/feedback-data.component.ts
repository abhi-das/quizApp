import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'feedback-data',
  templateUrl: './feedback-data.component.html',
  styleUrls: ['./feedback-data.component.scss'],
  inputs: ['formDataValues']
})
export class FeedbackDataComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		
	}

}
