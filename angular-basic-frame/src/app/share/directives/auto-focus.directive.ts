import { Directive, ElementRef, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[benniaoAutoFocus]'
})
export class AutoFocusDirective implements OnInit{

  @Input() 
  set benniaoAutoFocus(flag: boolean) {
    if(flag) {
      this.element.focus();
      setTimeout(() => {
        this.benniaoAutoFocusChange.emit(false);
      }, 0);
    }
  }
  
  @Output() benniaoAutoFocusChange: EventEmitter<boolean> = new EventEmitter();

  element: HTMLElement;

  constructor(
    private elementRef: ElementRef,
  ) {
    this.element = this.elementRef.nativeElement;
  }

  ngOnInit() {
    
  }

}
