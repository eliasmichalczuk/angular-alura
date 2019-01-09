import { Directive, ElementRef, HostListener, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[appDarkenOnHover]'
})
export class DarkenOnHoverDirective {

  @Input() brightness = '70%';
  @Input() brightnessRemove = '100%';

  constructor(private el: ElementRef,
    private render: Renderer) { }

  @HostListener('mouseover')
  darknOn() {
    this.render.setElementStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`);
  }

  @HostListener('mouseleave')
  darknOff() {
    this.render.setElementStyle(this.el.nativeElement, 'filter', `brightness(${this.brightnessRemove})`);
  }
}
