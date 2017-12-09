import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'tempcomp',
  templateUrl: './tempcomp.component.html',
  styleUrls: ['./tempcomp.component.scss'],
  inputs: ['headerSectionFormGroup', 'ctrlName']
})
export class TempcompComponent implements OnInit {

	@Input() headerSectionFormGroup: FormGroup;
	@Input() ctrlName: string;


	public control: FormControl;

	public cSelection: string;

	constructor() { }

	ngOnInit() {

		this.control = new FormControl(this.cSelection, Validators.required);
		this.headerSectionFormGroup.addControl(this.ctrlName, this.control);
	}

	onChange($e) {

		this.cSelection = $e.target.value;
		this.control.setValue(this.cSelection);
	}
}
