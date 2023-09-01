1) Sustituir el nombre del fichero app.router por app.routing.module.ts
2) Cambiar el en el fichero heroes.service.ts el tipo de la variable idx de string a number
3) En heroe.component.ts cambiar el import {HeroeService} por import {HeroesService}
4) En heroes.component.ts al final de templateUrl, falta una coma
5) En heroes.componente.ts hay que sustituir import { HeroeService, Heroe } por import { HeroesService, Heroe } 
6) En home.component.ts poner bien el templateurl (templateUrl)
7) En heroe2.component.ts, poner la comilla final a 'termino' y en el import poner la S a heroesService
8) En heroe2.component.ts, termino...
9) en heroe.targeta.component.ts he cambiado la variable index de number a any={}
10) En app.routing.module.ts había que añadirle la C a pathMath para que quede pathMatch
11) En heroe-targeta-component.html hay que eliminar la i que está entre paréntesis en (click)="verHeroe(i)"