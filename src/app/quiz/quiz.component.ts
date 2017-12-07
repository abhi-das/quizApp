import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  templateId: String[];

  constructor() { }

  ngOnInit() {

    this.templateId = ["single-choice", "multiple-choice", "single-choice", "multiple-choice"];

  }

}
