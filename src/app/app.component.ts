import { Component, Inject, inject } from '@angular/core';
import { BetterLoggerService } from './services/better-logger.service';
import { APP_CONFIG } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-sandbox';
  logger = inject(BetterLoggerService);
  constructor(@Inject(APP_CONFIG) config: string) {
    this.title = config;
    this.logger.log('AppComponent constructed ' + this.title);
  }
}
