import { Inject, Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { UserService } from './user.service';

const secretServiceFactory = (
  logger: LoggerService,
  userService: UserService
) => new SecretService(logger, userService.user.isAuthorized);

@Injectable()
export class SecretService {
  constructor(
    private logger: LoggerService,
    @Inject('isAuthorized') private isAuthorized: boolean
  ) {}

  getSecret() {
    const auth = this.isAuthorized ? 'authorized ' : 'unauthorized';
    this.logger.log(`SecretService: Retrieving secret for ${auth} user.`);
  }
}

export const secretServiceProvider = {
  provide: SecretService,
  useFactory: secretServiceFactory,
  deps: [LoggerService, UserService],
};
