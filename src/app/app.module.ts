import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { MultipleChoiceComponent } from './quiz/multiple-choice/multiple-choice.component';
import { SingleChoiceComponent } from './quiz/single-choice/single-choice.component';
import { WindowRef } from './services/window.service';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    MultipleChoiceComponent,
    SingleChoiceComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ScrollToModule.forRoot()
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [ WindowRef ],
  bootstrap: [AppComponent]
})
export class AppModule { }
