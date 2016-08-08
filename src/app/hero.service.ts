import {Hero} from './hero';
import {Observable} from 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class HeroService {
  private _heroesUrl =
  'http://nicolaspayot.github.io/workshop/heroes.json';

  constructor(private http: Http) {}

  findHeroes(): Observable<Hero[]> {
    return this.http.get(this._heroesUrl)
    .map(response => <Hero[]> response.json());
  }
}
