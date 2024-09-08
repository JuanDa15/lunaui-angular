import { Component, Input } from '@angular/core';
import { LunaBtnSizes, LunaBtnTypes } from './button';

@Component({
  selector: 'luna-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styles: [],
})
export class ButtonComponent {
  @Input() severity: LunaBtnTypes = 'primary'
  @Input() size: LunaBtnSizes = 'medium'
}
