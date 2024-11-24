import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LunaInputComponent, LunaInputVariant } from '../public-api';
import { LunaIconButtonComponent } from '../../buttons/public-api';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { LunaBtnSizes, LunaBtnVariants } from '../../buttons/button/button';
import { Booleanish } from '../../ts-helpers/ts-helpers';
import { LunaAlertVariant } from '../../feedback/alert/alert';
import { Small } from 'projects/lunaui-angular/src/stories/button.stories';

@Component({
  selector: 'luna-password-input',
  standalone: true,
  imports: [CommonModule, LunaInputComponent, LunaIconButtonComponent],
  templateUrl: './password-input.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LunaPasswordInputComponent),
      multi: true
    }
  ]
})
export class LunaPasswordInputComponent implements ControlValueAccessor {
  protected showPassword = false;
  protected value = '';

  protected readonly BUTTON_VARIANTS: Record<string, LunaBtnVariants> = {
    'outlined': 'outlined',
    'filled': 'filled',
    'underlined': 'text'
  }

  protected readonly BUTTON_HEIGHT: Record<string, string> = {
    'small': '32px',
    'medium': '40px',
    'large': '48px'
  }

  protected readonly BUTTON_MARGIN_TOP: Record<string, string> = {
    small: '16px',
    medium: '19px',
    large: '21px'

  }

  public onChangeFn: (value: string) => void = (value: string) => { };
  public onTouchedFn: () => void = () => { };

  @Input() variant: LunaInputVariant = 'outlined'
  @Input() disabled: Booleanish = false;
  @Input() label = '';
  @Input() size: LunaBtnSizes = 'medium'
  @Input() error: Booleanish = false;
  @Input() ariaLabel = '';
  @Input() ariaDescribedBy = '';
  @Input() id = '';
  @Input() placeholder = '';
  @Input() helperText = '';
  @Input() helperTextType: LunaAlertVariant = 'info';
  @Input() name: string | null = null;
  @Input() minlength: string | null = null;
  @Input() maxlength: string | null = null;
  @Input() pattern: string | null = null;
  @Input() readonly: Booleanish = false;
  @Input() defaultValue: string | null = null;
  @Input() attrSize = 20;
  @Input() list: string | null = null;
  @Input() step: string | null = null;
  @Input() inputStyles: Record<string, string> = {};

  @Output() change = new EventEmitter<Event>();
  @Output() input = new EventEmitter<InputEvent>();
  @Output() focus = new EventEmitter<FocusEvent>();
  @Output() blur = new EventEmitter<FocusEvent>();

  protected onChange(event: Event) {
    event.stopPropagation()
    this.onTouchedFn();
    this.change.emit(event);
  }

  protected onInput(event: Event) {
    event.stopPropagation()
    this.input.emit(event as InputEvent);
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onUpdate(this.value);
  }

  protected onUpdate(value: string) {
    this.onChangeFn(value);
    this.onTouchedFn()
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
    this.disabled = isDisabled ?? false;
  }
}
