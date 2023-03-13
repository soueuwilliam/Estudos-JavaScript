import { Directive ,HostListener,ElementRef,Renderer2,HostBinding} from '@angular/core';

@Directive({
  selector: '[appHighliteMouse]'
})
export class HighliteMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    /*this._renderer.setStyle(
      this._elementeRef.nativeElement,
      'background','yellow');*/
      this.backgroundcColor = 'yellow'
  }
  @HostListener('mouseleave') onMouseleve(){
    /*this._renderer.setStyle(
      this._elementeRef.nativeElement,
      'background-color','white');*/
      this.backgroundcColor = 'white'
  }

  @HostBinding('style.background-color') get setcolor(){
    return this.backgroundcColor;

  }
  private backgroundcColor:String = '';


  constructor(
    private _elementeRef: ElementRef,
    private _renderer:Renderer2
    ) { };

}
