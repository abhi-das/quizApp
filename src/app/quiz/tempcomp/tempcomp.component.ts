import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'tempcomp',
  templateUrl: './tempcomp.component.html',
  styleUrls: ['./tempcomp.component.scss'],
  inputs: ['headerSectionFormGroup', 'ctrlName']
})
export class TempcompComponent implements OnInit {

	@Input() headerSectionFormGroup: FormGroup;
	@Input() ctrlName: string;

	public elRef: ElementRef;
	// public updatedFormGrpEvent = new EventEmitter<any>();

	public control: FormControl;

	public cSelection: string;

	constructor(private _elRef: ElementRef) { }

	ngOnInit() {

		this.control = new FormControl(this.cSelection, Validators.required);

		this.headerSectionFormGroup.addControl(this.ctrlName, this.control);

		// this.updatedFormGrpEvent.emit(this.headerSectionFormGroup);
	}

	onChange($e) {
		this.cSelection = $e.target.value;
		this.control.setValue(this.cSelection);
	}
	// updateExisting(name:string) {


		// this.control = new FormControl(name, Validators.required);

		// this.headerSectionFormGroup.addControl(name, this.control);

		// this.updatedFormGrpEvent.emit(this.headerSectionFormGroup);

		// console.log('updated form group > ',  this.headerSectionFormGroup);
	// }

}
