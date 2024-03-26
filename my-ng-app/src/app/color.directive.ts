import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[setColor]',
  standalone: true
})
export class ColorDirective {

  constructor(private renderer: Renderer2, private element:ElementRef) {
     this.setColor = '';
  }

  @Input('setColor')
  setColor: string;

  // a private Logic Method

  private setColorOfElement(color:string):void{
    // set the style of an element where this directive will be applied
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', color);
  }

  // Event Methods those will be responsible to activate the Directive

  @HostListener('mouseenter')
  onMouseEnter():void{
    this.setColorOfElement(this.setColor || 'magenta');
  }
  @HostListener('mouseleave')
  onMouseLeave():void{
    this.setColorOfElement('');
  }


}
