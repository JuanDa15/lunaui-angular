import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[lunaToUppercase]',
  standalone: true
})
export class ToUppercaseDirective {

  @Input('lunaToUppercase') useDirective = false;

  @HostListener('input', ['$event']) onInput(event: InputEvent) {
    if (!this.useDirective) return;

    const input = event.target as HTMLInputElement;

    input.value = input.value.toLocaleUpperCase();
  }
}
