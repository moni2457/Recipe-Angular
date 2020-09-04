import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {
  @Input()  set appCustom(condition) {
    if(condition) {
      this.viewRef.createEmbeddedView(this.templateRef)
    } else {
      this.viewRef.clear
    }
  }

  constructor(private templateRef: TemplateRef<any>, private viewRef: ViewContainerRef) { }

}
