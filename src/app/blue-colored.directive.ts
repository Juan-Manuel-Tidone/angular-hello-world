import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[blueColored]'
})
export class BlueColoredDirective {

  constructor(element: ElementRef) { 

      //console.log(element);
      element.nativeElement.style.color = "blue";
    }
/*
    @HostListener('click') doSomething(){
      alert('It Works');
    }
*/
    @HostListener('click', ['$event']) elemClicked(elem){
      console.log('clicked', elem);
    }
  }
