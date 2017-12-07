import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public modalRef: BsModalRef;

  constructor(private _bsModalServ: BsModalService) {}

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this._bsModalServ.show(template);
  }

}
