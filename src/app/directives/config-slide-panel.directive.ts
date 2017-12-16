import { Directive, HostBinding, HostListener, EventEmitter } from '@angular/core';

@Directive({
  selector: '[config-slide-panel]'
})
export class ConfigSlidePanel {

  constructor() { }

  isConfigOpen: boolean = false;

  @HostBinding("class.isPanelOpen")
  get isPanelOpen() {
  	return this.isConfigOpen;
  }

  @HostListener('click')
  slideContainer() {
 
  	this.isConfigOpen = !this.isConfigOpen;
  }


}
