import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../servicios/peliculas.service';

@Component({
  selector: 'app-detalle',  // Corregido: el selector debe coincidir con la página
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  pelicula: any;

  constructor(private route: ActivatedRoute, private peliculasService: PeliculasService) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.pelicula = this.peliculasService.getPelicula(id);
  }
}
