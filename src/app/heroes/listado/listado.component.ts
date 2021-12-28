import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Blackwidow'];
  heroeBorrado: string = '';
  constructor() { 
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.pop() || this.heroeBorrado;
  }

}
