import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any = {};

  constructor( 
    // Consigue la ruta activa
    private activatedRoute: ActivatedRoute, 
    // Conecta con el servicio de Héroes
    private _heroeService: HeroesService,
    // Router para el botón de getBack
    private router: Router
    ) {
    this.activatedRoute.params.subscribe( param => {
      this.heroe = this._heroeService.getHeroe( param.id );
    })
   }

   getBack(){
    this.router.navigate([ '/heroes' ])
   }

}
