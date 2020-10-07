import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { HeroService } from '../hero.service';
import { Hero } from '../heroes/hero.model';
import { ResponsePaginationHero } from '../heroes/response-pagination-hero.model';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  /*
  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private readonly heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term))
    );
  }
*/

  heroes$: Hero[];
  heroesPaginated$: Observable<ResponsePaginationHero>;

  private searchTerms = new Subject<string>();

  constructor(private readonly heroService: HeroService) { }

  ngOnInit(): void {
    this.heroesPaginated$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term))
    );

    this.heroesPaginated$.subscribe(x => this.heroes$ = x.result);
  }

search(term: string): void {
  this.searchTerms.next(term);
}

}
