import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  questions: any;

  constructor() { }

  ngOnInit() {

  	this.questions = [{
  		type: 'single-choice'
  	}, {
  		type: 'multiple-choice'
  	}, {
  		type: 'single-choice'
  	}, {
  		type: 'multiple-choice'
  	}];

  }

}
