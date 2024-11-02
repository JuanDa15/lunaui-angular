import { AfterViewInit, ChangeDetectionStrategy, Component, ContentChild, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { BtnType, LunaBtnSizes, LunaBtnVariants, PopoverTargetAction } from '../button/button';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'luna-icon-button',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './icon-button.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LunaIconButtonComponent implements AfterViewInit {
  protected sizes: Record<LunaBtnSizes, string> = {
    small: '16px',
    medium: '20px',
    large: '24px'
  }
  @ContentChild('icon') ref!: ElementRef;

  @Input() size: LunaBtnSizes = 'medium';
  @Input() variant: LunaBtnVariants = 'filled'
  @Input() disabled: boolean = false;
  @Input() ariaLabel: string = '';
  @Input() ariaLive: 'off' | 'polite' | 'assertive' | '' = '';
  @Input() ariaDescribedBy: string = '';
  @Input() type: BtnType = 'button';
  @Input() form: string = '';
  @Input() name: string = '';
  @Input() popovertarget: string = '';
  @Input() popovertargetaction: PopoverTargetAction | null = null;
  @Input() className: string = '';
  @Input() styles: Record<string, string> = {}
  @Input() id: string | null = null;

  @Output() onClick = new EventEmitter<Event>()
  @Output() focus = new EventEmitter<FocusEvent>()
  @Output() blur = new EventEmitter<FocusEvent>()

  ngAfterViewInit(): void {
    const icon = this.ref?.nativeElement as HTMLElement;

    if (!icon) {
      console.error('Icon not found')
      return;
    }

    icon.style.width = this.sizes[this.size];
    icon.style.height = this.sizes[this.size];
  }
}

