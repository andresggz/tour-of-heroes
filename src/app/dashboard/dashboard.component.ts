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
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

}
