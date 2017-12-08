import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.scss'],
  inputs: ['qz','index','navigateNext']
})
export class MultipleChoiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
