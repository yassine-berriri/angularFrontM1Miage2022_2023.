import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appNonRendu]'
})
export class NonRenduDirective {

  constructor(el:ElementRef) { 
    el.nativeElement.style.color = 'red';
    el.nativeElement.style.border= '1px dashed';
  }

}
