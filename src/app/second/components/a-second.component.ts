import {
  AfterContentChecked,
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-a-second',
  template: `<div>
    <button (click)="addValue()">Add value</button>
    <button (click)="doNothing()">Just button</button>Second component:
    {{ value }}
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ASecondComponent implements AfterViewChecked, AfterContentChecked {
  @Input() value = 0;

  constructor() {
    document.addEventListener('click', (event) => {
      // console.log('Document clicked', event);
    });
  }

  addValue() {
    this.value++;
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked ASecondComponent');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked ASecondComponent');
  }

  doNothing() {
    console.log('Just button clicked');
  }
}
