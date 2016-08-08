import {Hero} from './hero';
import {Observable} from 'rxjs/Rx';

export class HeroService {
  findHeroes(): Observable<Hero[]> {
    return Observable.of([new Hero('Ironman'), new Hero('Captain America')]);
  }
}
