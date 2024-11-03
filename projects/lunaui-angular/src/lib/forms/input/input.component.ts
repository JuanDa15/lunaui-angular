import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, forwardRef, inject, Input, Output, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LunaAlertComponent } from '../../feedback/public-api';
import { LunaAlertVariant } from '../../feedback/alert/alert';
import { LunaTemplate } from '../../shared/luna-template/luna-template.directive';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormatterDirective, LunaFormatCurrencyDisplay, LunaFormatEventHandler, LunaFormatTypes, NoWhitespacesDirective, OnlyNumbersDirective, ToLowercaseDirective, ToUppercaseDirective } from '../../directives/public-api';
import { Booleanish, isTruthy } from '../../ts-helpers/ts-helpers';
import { LunaInputSize, LunaInputVariant } from './input';

@Component({
  selector: 'luna-input',
  standalone: true,
  imports: [CommonModule, LunaAlertComponent, LunaTemplate, NoWhitespacesDirective, ToUppercaseDirective, ToLowercaseDirective, FormatterDirective, OnlyNumbersDirective],
  templateUrl: './input.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LunaInputComponent),
      multi: true
    }
  ]

})
export class LunaInputComponent implements ControlValueAccessor {
  private _cdr = inject(ChangeDetectorRef)
  protected value: string = '';

  protected sizeClasses = {
    small: 'luna-input-small',
    medium: 'luna-input-medium',
    large: 'luna-input-large'
  }

  protected variantClasses = {
    filled: 'luna-input-filled',
    outlined: 'luna-input-outlined',
    underlined: 'luna-input-underlined'
  }

  protected focused = false;
  protected controlDisabled = false;
  public isTruthy = isTruthy
  public onChangeFn: (value: string) => void = (value: string) => { };
  public onTouchedFn: () => void = () => { };

  @Input() label = '';
  @Input() size: LunaInputSize = 'medium';
  @Input() variant: LunaInputVariant = 'outlined';
  @Input() error: Booleanish = false;
  @Input() disabled: Booleanish = false;
  @Input() ariaLabel = '';
  @Input() ariaDescribedBy = '';
  @Input() id = '';
  @Input() placeholder = '';
  @Input() helperText = '';
  @Input() helperTextType: LunaAlertVariant = 'info';
  @Input() type = 'text';
  @Input() name: string | null = null;
  @Input() minlength: string | null = null;
  @Input() maxlength: string | null = null;
  @Input() pattern: string | null = null;
  @Input() readonly: Booleanish = false;
  @Input() defaultValue: string | null = null;
  @Input() attrSize = 20;
  @Input() min: string | null = null;
  @Input() max: string | null = null;
  @Input() list: string | null = null;
  @Input() step: string | null = null;

  @Input() allowWhiteSpaces: Booleanish = true;
  @Input() transformToUppercase: Booleanish = false;
  @Input() transformToLowercase: Booleanish = false;
  @Input() numbersOnly: Booleanish = false;

  @Input() format: LunaFormatTypes | null = null;
  @Input() formatEventHandler: LunaFormatEventHandler = 'input';
  @Input() formatCurrency: string = 'USD';
  @Input() formatDecimals: number = 0;
  @Input() formatCurrencyDisplay: LunaFormatCurrencyDisplay = 'symbol';

  @Output() focus = new EventEmitter<FocusEvent>();
  @Output() blur = new EventEmitter<FocusEvent>();
  @Output() change = new EventEmitter<Event>();
  @Output() input = new EventEmitter<InputEvent>();

  protected onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.input.emit(event as InputEvent);

    if (this.format) {
      const sanitizedValue = this.value.replace(/\D/g, '');
      this.onUpdate(sanitizedValue)
      return;
    }
    this.onUpdate(this.value);

  }

  protected onUpdate(value: string) {
    this.onChangeFn(value);
    this.onTouchedFn()
  }

  protected onChange(event: Event) {
    this.onTouchedFn()
    this.change.emit(event);
  }

  protected getInputMode() {
    if (this.type === 'text' && (this.numbersOnly || this.format)) {
      return 'numeric';
    }
    return this.type;
  }

  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: (value: string) => void): void {
    this.onChangeFn = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouchedFn = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.controlDisabled = isDisabled ?? false;
    this._cdr.detectChanges();
  }

  get handleInnerUpdate() {
    return !this.format;
  }
}
