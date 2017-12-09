import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'tempcomp',
  templateUrl: './tempcomp.component.html',
  styleUrls: ['./tempcomp.component.scss'],
  inputs: ['headerSectionFormGroup']
})
export class TempcompComponent implements OnInit {

	@Input() headerSectionFormGroup: FormGroup;

	constructor() { }

	ngOnInit() {
	}

}
