import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appMydirective]'
})
export class MydirectiveDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }
  
  @Input() 
  
  set appMydirective(user) {
    if(user.status == 'active') {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

}
