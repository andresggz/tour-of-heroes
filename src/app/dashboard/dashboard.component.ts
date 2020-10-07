import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from './../heroes/hero.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[];
  constructor(private readonly heroService: HeroService) { }

  ngOnInit(): void {
      this.getHeroes();
  }

  getHeroes(){
    this.heroService.searchHeroes("")
      .subscribe(responsePagination => this.heroes = responsePagination.result.slice(1, 5));
  }

}
