import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { QuizSevice } from '../services/quiz.service';
import { Response } from '@angular/http';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  questions: any;
  form: FormGroup;
  formData: object;
  qzData: any;

  constructor(private _scrollToService: ScrollToService, private _qzSer: QuizSevice) { }

  ngOnInit() {

    this.qzData = this._qzSer.getQuiz().subscribe((res: Response) => {
      // console.log('right here > ', res['questionnaire']['questions']);
      this.questions = res['questionnaire']['questions'];
    });

    // Form Controls
    this.form = new FormGroup({});
  }

  onFeedbackSubmit(feedback: any, showDtContainer: string) {

    // console.log("feedback > ", showDtContainer);

    this.formData = feedback;

    const config: ScrollToConfigOptions = {
      target: showDtContainer
    };
 
    this._scrollToService.scrollTo(config);
  }

}
