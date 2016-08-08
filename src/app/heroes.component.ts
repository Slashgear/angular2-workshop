import {Component} from '@angular/core';
import {HeroComponent} from './hero.component';
import {Hero} from './hero';

@Component({
  selector: 'heroes',
  template: `
  <h1>Heroes</h1>
  <ul>
    <li *ngFor="let hero of heroes">
      <hero [hero]="hero"></hero>
    </li>
  </ul>
  `,
  directives: [HeroComponent]
})
export class HeroesComponent {
  heroes: Hero[] = [new Hero('Ironman'), new Hero('Captain America')];
}
