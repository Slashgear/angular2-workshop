import {Hero} from './hero';

export class HeroService {
  findHeroes(): Hero[]{
    return [new Hero('Ironman'), new Hero('Captain America')];
  }
}
