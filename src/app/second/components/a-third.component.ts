import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-a-third',
  template:
    '<div><button (click)="addValue()">Add value</button>Third component: {{value}}</div>',
})
export class AThirdComponent {
  @Input() value = 0;

  addValue() {
    this.value++;
  }
}
