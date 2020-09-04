import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appHighlightDirective]'
})
export class AppHighlightDirective implements OnInit{
@HostBinding('style.backgroundColor') backgroundColor: string 
@Input() defaultColor: string;
@Input() highlighttColor: string;

constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    
}
ngOnInit() {
    this.backgroundColor = this.defaultColor
    //this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "blue")
}
@HostListener('mouseover') mouseover(eventData: Event) {
    this.backgroundColor=this.highlighttColor
    //this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "blue")
}
@HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor=this.defaultColor
    //this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "transparent")
}

}