import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class BetterLoggerService extends LoggerService {
  constructor() {
    super();
    console.log('BetterLoggerService Init');
  }

  override log(message: string) {
    console.log('BetterLoggerService: ' + message);
  }
}
