import {
  AfterViewInit,
  Component,
  OnInit,
  QueryList,
  ViewChildren,
  inject,
} from '@angular/core';
import { SandService } from '../sand.service';
import { LoggerService } from '../services/logger.service';
import { BetterLoggerService } from '../services/better-logger.service';
import { UnitComponent } from './unit/unit.component';
import {
  SecretService,
  secretServiceProvider,
} from '../services/secret.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  providers: [
    { provide: LoggerService, useClass: BetterLoggerService },
    secretServiceProvider,
  ],
})
export class FirstComponent implements AfterViewInit {
  @ViewChildren(UnitComponent) units: QueryList<UnitComponent> | undefined =
    undefined;
  logger = inject(LoggerService);

  unitNames: string[] = [];
  nameGen = this.nameGenerator();

  constructor(sandService: SandService, secretService: SecretService) {
    sandService.ping();

    secretService.getSecret();
  }

  ngAfterViewInit(): void {
    // console.log(this.units);
    // if (this.units) {
    //   this.units.forEach((unit) => {
    //     this.logger.log('FirstComponent saw UnitComponent');
    //   });
    // }
    this.units?.changes.subscribe((units) => {
      this.logger.log('FirstComponent saw UnitComponent');
    });
  }

  addRandomNameUnit() {
    this.unitNames.push('Unit ' + this.nameGen.next().value);
  }

  *nameGenerator() {
    let i = 0;
    while (true) {
      yield `Name${i++}`;
    }
  }
}
