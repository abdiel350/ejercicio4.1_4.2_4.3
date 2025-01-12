import { Injectable } from '@angular/core';

export interface Pelicula {
  title: string;
  year: string;
  director: string;
  poster: string;
  synopsis: string;
}

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  private peliculas: Pelicula[];

  constructor() {
    this.peliculas = [
      {
        title: 'El padrino',
        year: '1972',
        director: 'Francis Ford Coppola',
        poster: 'el_padrino.jpg',
        synopsis: 'Don Vito Corleone (Marlon Brando) es el respetado y temido jefe de una de las cinco familias de la mafia de Nueva York...',
      },
      {
        title: 'El Padrino. Parte II',
        year: '1974',
        director: 'Francis Ford Coppola',
        poster: 'el_padrino_2.jpg',
        synopsis: 'Continuación de la historia de los Corleone por medio de dos historias paralelas...',
      },
      {
        title: 'La lista de Schindler',
        year: '1993',
        director: 'Steven Spielberg',
        poster: 'la_lista_de_schindler.jpg',
        synopsis: 'Segunda Guerra Mundial (1939-1945). Oskar Schindler (Liam Neeson), un hombre de enorme astucia...',
      },
      {
        title: 'Pulp Fiction',
        year: '1994',
        director: 'Quentin Tarantino',
        poster: 'pulp_fiction.jpg',
        synopsis: 'Jules y Vincent, dos asesinos a sueldo con muy pocas luces, trabajan para Marsellus Wallace...',
      },
      {
        title: 'Cadena perpetua',
        year: '1994',
        director: 'Frank Darabont',
        poster: 'cadena_perpetua.jpg',
        synopsis: 'Acusado del asesinato de su mujer, Andrew Dufresne (Tim Robbins), tras ser condenado a cadena perpetua...',
      },
    ];
  }

  getPeliculas(): Pelicula[] {
    return this.peliculas;
  }

  getPelicula(id: number): Pelicula | undefined {
    return this.peliculas[id];
  }
}
