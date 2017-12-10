import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { MultipleChoiceComponent } from './quiz/multiple-choice/multiple-choice.component';
import { SingleChoiceComponent } from './quiz/single-choice/single-choice.component';
import { WindowRef } from './services/window.service';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { UserInputComponent } from './quiz/user-input/user-input.component';
import { FeedbackDataComponent } from './quiz/feedback-data/feedback-data.component';

import { HttpModule } from '@angular/http';
import { QuizSevice } from './services/quiz.service';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ScrollToModule.forRoot()
  ],
  declarations: [
    AppComponent,
    QuizComponent,
    MultipleChoiceComponent,
    SingleChoiceComponent,
    UserInputComponent,
    FeedbackDataComponent
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [ WindowRef, QuizSevice ],
  bootstrap: [AppComponent]
})
export class AppModule { }
