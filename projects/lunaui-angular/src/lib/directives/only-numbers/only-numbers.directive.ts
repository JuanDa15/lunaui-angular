import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[lunaOnlyNumbers]',
  standalone: true
})
export class OnlyNumbersDirective {

  @Input('lunaOnlyNumbers') useDirective = false;

  @HostListener('input', ['$event']) onInput(event: InputEvent) {
    const input = event.target as HTMLInputElement
    const { type, value } = input

    if (!this.useDirective) return;

    if (!type) return;

    if (type !== 'text' && type !== 'tel') return;

    const newValue = value.replaceAll(/\D/g, '')
    input.value = newValue;
  }

}
