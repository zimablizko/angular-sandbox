import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-a-first',
  template:
    '<div><button (click)="addValue()">Add value</button> First component: {{value}}</div>',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AFirstComponent implements AfterViewChecked {
  @Input() value = 0;

  addValue() {
    this.value++;
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked AFirstComponent');
  }
}
