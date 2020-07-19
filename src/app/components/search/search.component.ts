import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, HeroeInterface } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  searchHeroes: HeroeInterface[] = [];
  searchText: string = '';


  constructor(
        // Consigue la ruta activa
        private activatedRoute: ActivatedRoute, 
        // Conecta con el servicio de Héroes
        private _heroeService: HeroesService,
        private router: Router
  ) { 
    this.activatedRoute.params.subscribe( param => {
      console.log(param);
      this.searchText = param.search;
      this.searchHeroes = this._heroeService.arrayOfSearch(param.search);
    })
  }

  ngOnInit(): void {
  }

  seeHeroe(i: number) {
    this.router.navigate([ '/heroe', i ])
  }

}
