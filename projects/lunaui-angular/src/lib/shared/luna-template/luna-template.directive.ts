import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[lunaTemplate]',
  standalone: true
})
export class LunaTemplate {

  @Input('lunaTemplate') name: string | undefined;

  constructor(public template: TemplateRef<unknown>) { }

  getType(): string | undefined {
    return this.name;
  }
}
