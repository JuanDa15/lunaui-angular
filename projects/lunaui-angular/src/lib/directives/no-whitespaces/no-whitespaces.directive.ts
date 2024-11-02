import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[lunaNoWhitespaces]',
  standalone: true
})
export class NoWhitespacesDirective {

  @Input('lunaNoWhitespaces') useDirective = true;

  @HostListener('input', ['$event']) onInput(event: InputEvent) {
    const input = event.target as HTMLInputElement;
    const { type, value = '' } = input

    if (this.useDirective) return;

    if (!type) return;
    if (type !== 'text' && type !== 'url' && type !== 'tel') return;

    if (!value) return;

    if (value.includes(' ')) {
      const newValue = value.replaceAll(/\s/g, '');
      input.value = newValue;
      return;
    }
  }
}
