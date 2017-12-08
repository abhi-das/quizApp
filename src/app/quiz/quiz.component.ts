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
  		headline: "Wen möchtest Du versichern?",
  		type: 'single-choice'
  	}, {
  		headline: "Bist Du Beamter oder im öffentlichen Dienst angestellt?",
  		type: 'multiple-choice'
  	}, {
  		headline: "Möchtest Du eine Forderungsausfalldeckung absichern?",
  		type: 'single-choice'
  	}, {
  		headline: "Wie wichtig ist Dir die Absicherung gegen Mietsachschäden?",
  		type: 'multiple-choice'
  	}];

  }

}
