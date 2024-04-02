import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { SandService } from '../sand.service';
import {
  fromEvent,
  throttleTime,
  scan,
  takeUntil,
  timer,
  mapTo,
  startWith,
  combineLatest,
  concatAll,
  interval,
  map,
  of,
  from,
  delay,
} from 'rxjs';
import { AFirstComponent } from './components/a-first.component';

type Point = { x: number; y: number };
type P = keyof Point;
type P2 = 'x' | 'y';
type P1 = Point;

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondComponent implements OnInit, AfterViewChecked {
  value = 0;
  @ViewChild(AFirstComponent) firstComponent: AFirstComponent | undefined;

  addValue() {
    this.value++;
    // this.firstComponent?.addValue();
  }

  constructor() {
    // sandService.ping();
    // const p: P = 'y';
    // const p1: P1 = { x: 1, y: 2 };
  }

  // identity<Type>(arg: Type): Type {
  //   return arg;
  // }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked SecondComponent');
  }

  async ngOnInit() {
    // console.log(this.identity<string>('ffdf'));
    // document.addEventListener('dblclick', (event) => {
    //   event.stopImmediatePropagation();
    //   console.log('DClicked', event);
    // });
    // document.addEventListener('click', (event) => {
    //   event.stopImmediatePropagation();
    //   console.log('Clicked', event);
    // });
    // document.addEventListener('click', (event) => {
    //   console.log('Clicked 2', event);
    // });
    // fromEvent(document, 'click')
    //   .pipe(
    //     throttleTime(1000),
    //     scan((count) => count + 1, 0)
    //   )
    //   .subscribe((count) => console.log(`Clicked ${count} times`));
    // fromEvent(document, 'click')
    //   .pipe(takeUntil(timer(5000)))
    //   .subscribe((count) => console.log(`Clicked ${count} times`));
    // const source = interval(2000);
    // const example = source.pipe(
    //   //for demonstration, add 10 to and return as observable
    //   map((val) => of(val + 10)),
    //   //merge values from inner observable
    //   concatAll()
    // );
    // //output: 'Example with Basic Observable 10', 'Example with Basic Observable 11'...
    // const subscribe = example.subscribe((val) =>
    //   console.log('Example with Basic Observable:', val)
    // );
    // const source = interval(1000);
    // const example = source
    //   .pipe(
    //     //for demonstration, add 10 to and return as observable
    //     map((val) => of(val + 10))
    //   )
    //   .subscribe((val) => console.log('Example with Basic Observable:', val));
    // console.log('before wait');
    // const wait = timer(2000);
    // await of(null).pipe(delay(2000)).toPromise();
    // console.log('after wait');
  }
}
