import {Component, Input} from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'hero',
  template: '{{hero.name}}'
})
export class HeroComponent {
  @Input() hero: Hero;
}
