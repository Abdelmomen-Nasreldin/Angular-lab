import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appIsPurshased]'
})
export class IsPurshasedDirective {

  constructor(public elemRef : ElementRef) {
    elemRef.nativeElement.style.border = '1px solid'
   }
// @HostListener()

}
