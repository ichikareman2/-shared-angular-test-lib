import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[synButton]'
})
export class ButtonDirective {
  @HostBinding('style') class = 'border: none;';
  constructor() { }

}
