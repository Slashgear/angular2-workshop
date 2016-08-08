import {Component, Input} from '@angular/core';

@Component({
  selector: 'hero',
  template: '{{name}}'
})
export class HeroComponent {
  @Input() name: string;
}
