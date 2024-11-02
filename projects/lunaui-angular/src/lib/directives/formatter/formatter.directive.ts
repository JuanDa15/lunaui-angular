import { Directive, HostListener, Input } from '@angular/core';
import { toCreditCard, toCurrency, toPhone } from '../../helpers/formatter';

@Directive({
  selector: '[lunaFormatter]',
  standalone: true
})
export class FormatterDirective {

  @Input('lunaFormatter') format: 'currency' | 'creditCard' | 'phone' | null = null;
  @Input('lunaFormatterEvent') formatEvent: 'input' | 'change' = 'input';
  @Input('lunaFormatterCurrency') currency = 'USD';
  @Input('lunaFormatterDecimals') decimals = 2;
  @Input('lunaFormatterCurrencyDisplay') currencyDisplay: 'symbol' | 'code' | 'name' | 'narrowSymbol' = 'symbol';

  @HostListener('input', ['$event']) onInput(event: InputEvent) {
    if (!this.format) { return; }
    if (this.formatEvent !== 'input') return;
    this._formatHandler(event);
  }

  @HostListener('change', ['$event']) onChange(event: InputEvent) {
    if (!this.format) { return; }
    if (this.formatEvent !== 'change') return;
    this._formatHandler(event);
  }

  private _formatHandler(event: InputEvent) {
    switch (this.format) {
      case 'currency':
        this._formatCurrency(event);
        break;
      case 'creditCard':
        this._formatCreditCard(event);
        break;
      case 'phone':
        this._formatPhone(event);
        break;
    }
  }

  private _formatCurrency(event: InputEvent): void {
    const input = event.target as HTMLInputElement;
    const { type } = input;
    if (type !== 'text') return;

    const { formatted } = toCurrency({
      value: input.value,
      currency: this.currency,
      decimals: this.decimals,
      currencyDisplay: this.currencyDisplay
    });
    input.value = formatted;
  }

  private _formatCreditCard(event: InputEvent): void {
    const input = event.target as HTMLInputElement;
    const { type } = input;
    if (type !== 'text') return;
    const { formatted } = toCreditCard(input.value);
    input.value = formatted;
  }
  private _formatPhone(event: InputEvent): void {
    const input = event.target as HTMLInputElement;
    const { type } = input;
    if (type !== 'text') return;
    const { formatted } = toPhone(input.value);
    input.value = formatted;
  }

}
