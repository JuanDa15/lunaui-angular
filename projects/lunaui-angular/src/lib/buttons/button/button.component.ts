import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { BtnType, LunaBtnSizes, LunaBtnVariants, PopoverTargetAction } from './button';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'luna-button',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [],
})
export class LunaButtonComponent {
  @Input() size: LunaBtnSizes = 'medium'
  @Input() variant: LunaBtnVariants = 'filled'
  @Input() ariaLabel: string = ''
  @Input() ariaLive: 'off' | 'polite' | 'assertive' | '' = '';
  @Input() ariaDescribedBy: string = '';
  @Input() disabled: boolean = false;
  @Input() type: BtnType = 'button';
  @Input() form: string = '';
  @Input() name: string = '';
  @Input() popovertarget: string = '';
  @Input() popovertargetaction: PopoverTargetAction | null = null;
  @Input() className: string = '';
  @Input() styles: Record<string, string> = {}
  @Input() value: string | null = null;

  @Output() onClick = new EventEmitter<Event>()
  @Output() focus = new EventEmitter<FocusEvent>()
  @Output() blur = new EventEmitter<FocusEvent>()
}
