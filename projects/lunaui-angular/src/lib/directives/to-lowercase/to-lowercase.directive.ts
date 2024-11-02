import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[lunaToLowercase]',
  standalone: true
})
export class ToLowercaseDirective {

  @Input('lunaToLowercase') useDirective = false;

  @HostListener('input', ['$event']) onInput(event: InputEvent) {
    if (!this.useDirective) return;
    const input = event.target as HTMLInputElement;

    input.value = input.value.toLocaleLowerCase();
  }
}
