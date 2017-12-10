import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  questions: any;
  form: FormGroup;
  formData: object;

  constructor() { }

  ngOnInit() {

  	this.questions = [{
      type: "text",
      headline: "Hast Du noch weitere Informationen oder Anmerkungen für uns?",
      required: false
    }, {
      headline: "Wen möchtest Du versichern?",
      type: 'single-choice',
      nextEnable: false,
      required: true,
      choices: [{
        "label": "Meine Familie mit Kindern",
        "value": "Meine Familie mit Kindern",
        "selected": false
      }, {
        "label": "Meine Familie ohne Kinder",
        "value": "Meine Familie ohne Kinder",
        "selected": false
      }, {
        "label": "Mich ohne Kind",
        "value": "Mich ohne Kind",
        "selected": false
      }, {
        "label": "Mich mit Kind",
        "value": "Mich mit Kind",
        "selected": false
      }, {
        "label": "Mich und meinen Lebenspartner",
        "value": "Mich und meinen Lebenspartner",
        "selected": false
      }]
    }, {
  		headline: "Lorem ipsum reprehenderit aliquip fugiat est Do sint?",
  		type: 'single-choice',
      nextEnable: true,
      required: true,
      choices: [{
        "label": "Meine Familie mit Kindern",
        "value": "Meine Familie mit Kindern",
        "selected": false
      }, {
        "label": "Meine Familie ohne Kinder",
        "value": "Meine Familie ohne Kinder",
        "selected": false
      }, {
        "label": "Mich ohne Kind",
        "value": "Mich ohne Kind",
        "selected": false
      }]
  	}, {
  		headline: "Bist Du Beamter oder im öffentlichen Dienst angestellt?",
  		type: 'multiple-choice',
      nextEnable: false,
      required: false,
      choices: [{
        "label": "Ja",
        "value": "Ja",
        "selected": false
      }, {
        "label": "Nein",
        "value": "Nein",
        "selected": false
      }]
  	}, {
  		headline: "Möchtest Du eine Forderungsausfalldeckung absichern?",
  		type: 'single-choice',
      nextEnable: true,
      required: false,
      choices: [{
        "label": "Ja",
        "value": "Ja",
        "selected": false
      }, {
        "label": "Nein",
        "value": "Nein",
        "selected": false
      }]
  	}, {
      headline: "Wie wichtig ist Dir die Absicherung gegen Mietsachschäden?",
      type: 'multiple-choice',
      nextEnable: true,
      required: false,
      choices: [{
        "label": "Mich mit Kind",
        "value": "Mich mit Kind",
        "selected": false
      }, {
        "label": "Mich und meinen Lebenspartner",
        "value": "Mich und meinen Lebenspartner",
        "selected": false
      }]
    }, {
  		headline: "Sunt laborum veniam aute magna do dolor ?",
  		type: 'single-choice',
      nextEnable: true,
      required: true,
      choices: [{
        "label": "Mich mit Kind",
        "value": "Mich mit Kind",
        "selected": false
      }, {
        "label": "Irure est cillum.",
        "value": "Lorem ipsum officia labore.",
        "selected": false
      }, {
        "label": "Sunt do fugiat ea tempor.",
        "value": "Cillum ut.",
        "selected": false
      }]
  	}];

    // Form Controls
    this.form = new FormGroup({});
  }

  onFeedbackSubmit(feedback: any) {

    // console.log("feedback > ", feedback);

    this.formData = feedback;

  }

}
