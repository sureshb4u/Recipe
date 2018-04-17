import { Component, OnInit } from '@angular/core';

import { Recipe } from './hero';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  providers: [ HeroesService ],
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Recipe[];
  editHero: Recipe; // the hero currently being edited

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroesService.getreceipe()
      .subscribe(heroes => this.heroes = heroes) ;
  }



}
