import { Directive ,ElementRef,HostBinding,HostListener,Renderer2,Input} from '@angular/core';

@Directive({
  selector: '[appHighlite]'
})
export class HighliteDirective {

  @HostListener('mouseenter') onMouseOver(){

      this.backgroundcColor = this.defaultColor
  }
  @HostListener('mouseleave') onMouseleve(){
      this.backgroundcColor = this.highliteColor
  }

  @HostBinding('style.background-color') get setcolor(){
    return this.backgroundcColor;

  }
  private backgroundcColor:String = '';


  @Input() defaultColor : string =' white';
  @Input('appHighlite') highliteColor :string = 'yellow';

  constructor(

    ) { };

  ngOnInit(){
    this.backgroundcColor = this.defaultColor
  }

}


