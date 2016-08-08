import {Component} from '@angular/core';

@Component({
  selector: 'heroes',
  template: `
  <h1>Heroes</h1>
  <ul>
    <li *ngFor="let name of names">
      {{name}}
    </li>
  </ul>
  `
})
export class Heroes {
  names: string[] = ['Ironman', 'Captain America'];
}
