import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'tempcomp',
  templateUrl: './tempcomp.component.html',
  styleUrls: ['./tempcomp.component.scss'],
  inputs: ['headerSectionFormGroup', 'ctrlName'],
  outputs: ['updatedFormGrpEvent']
})
export class TempcompComponent implements OnInit {

	@Input() headerSectionFormGroup: FormGroup;
	@Input() ctrlName: string;

	public updatedFormGrpEvent = new EventEmitter<any>();

	control: FormControl;

	constructor() { }

	ngOnInit() {
		// console.log('ctrlName >>> ',this.ctrlName);
		this.control = new FormControl(this.ctrlName, Validators.required);

		this.headerSectionFormGroup.addControl(this.ctrlName, this.control);

		this.updatedFormGrpEvent.emit(this.headerSectionFormGroup);
	}

	// updateExisting(name:string) {


		// this.control = new FormControl(name, Validators.required);

		// this.headerSectionFormGroup.addControl(name, this.control);

		// this.updatedFormGrpEvent.emit(this.headerSectionFormGroup);

		// console.log('updated form group > ',  this.headerSectionFormGroup);
	// }

}
