import { Component, OnInit } from '@angular/core';
import { HeroesService, HeroeInterface } from '../../services/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: HeroeInterface[] = [];

  constructor( private _heroesService: HeroesService,
               private router: Router
              ) { }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
  }

  seeHeroe(i: number) {
    this.router.navigate([ '/heroe', i ])
  }

}
