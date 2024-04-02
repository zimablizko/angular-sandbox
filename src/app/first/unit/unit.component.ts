import { Component, Input } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss'],
})
export class UnitComponent {
  @Input() name = '';

  constructor(logger: LoggerService) {
    logger.log('UnitComponent constructed');
  }
}
