import {Component} from '@angular/core';
import {HeroComponent} from './hero.component';

@Component({
  selector: 'heroes',
  template: `
  <h1>Heroes</h1>
  <ul>
    <li *ngFor="let name of names">
      <hero [name]="name"></hero>
    </li>
  </ul>
  `,
  directives: [HeroComponent]
})
export class HeroesComponent {
  names: string[] = ['Ironman', 'Captain America'];
}
