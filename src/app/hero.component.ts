import {Component, Input} from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'hero',
  template: `{{hero.name}} <img src="{{hero.picture}}" class="img img-responsive">`
})
export class HeroComponent {
  @Input() hero: Hero;
}
