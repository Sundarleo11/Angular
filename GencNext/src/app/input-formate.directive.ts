import { HostListener, Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormate]'
})
export class InputFormateDirective {

  @Input('input') format;

  constructor(private el: ElementRef) { }
  @HostListener('focuse') onFocus() {
    let value: String = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toLowerCase();
    //console.log("on Focus");

  }

  // @HostListener('Blure') onBlure() {
  //   console.log("on Blure");

  // }


}
