import { Injectable } from "@angular/core";

import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 11700
        },
        {
          nombre: 'Vegeta',
          poder: 11000
        },
        {
          nombre: 'Krillin',
          poder: 850
        }
    
    ]

    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    constructor() {
    }

    agregarPersonajes(personaje: Personaje) {
        this._personajes.push(personaje);
    }

}