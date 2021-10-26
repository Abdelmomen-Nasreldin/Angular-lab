import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appProductCard]'
})
export class ProductCardDirective {

  constructor(private elemRef: ElementRef) {
    // this.elemRef.nativeElement.style.shadow = '0 0 1px #eee'; /// not working ?????????????
    this.elemRef.nativeElement.style.border="1px #000 solid";

   }

   @HostListener ('mouseover') onMouseOver(){
  //  this.elemRef.nativeElement.style.shadow="10px 10px 10px #000";
   this.elemRef.nativeElement.style.borderRadius="200px ";
   }

   @HostListener('mouseout') onMouseout(){
    // this.elemRef.nativeElement.style.shadow="0 0 1px #eee";
    this.elemRef.nativeElement.style.borderRadius="0px ";
   }

}
