import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LunaAlertSize, LunaAlertStyle, LunaAlertVariant } from './alert';
import { LunaIconButtonComponent } from '../../buttons/public-api';

@Component({
  selector: 'luna-alert',
  standalone: true,
  imports: [CommonModule, LunaIconButtonComponent],
  templateUrl: './alert.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LunaAlertComponent {
  protected visible: boolean = true;

  @Input() variant: LunaAlertVariant = 'info'
  @Input() alertStyle: LunaAlertStyle = 'box';
  @Input() size: LunaAlertSize = 'medium'
  @Input() role: 'alert' | 'status' = 'alert'
  @Input() dismissible: boolean = false;
  @Input() showIcon: boolean = false;
  @Input() show: boolean = true;
  @Input() className: string = '';
  @Input() styles: Record<string, string> = {};
  @Input() id: string | null = null;

  @Output() dismissed = new EventEmitter<void>();
}
