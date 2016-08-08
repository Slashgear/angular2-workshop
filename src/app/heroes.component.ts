import {Component} from '@angular/core';
import {HeroComponent} from './hero.component';
import {Hero} from './hero';
import {HeroService} from './hero.service';

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
  directives: [HeroComponent],
  providers: [HeroService]
})
export class HeroesComponent {
  heroes: Hero[];
  constructor(private heroService: HeroService){
    this.heroService.findHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
