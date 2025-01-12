import { Component, OnInit  } from '@angular/core';
//import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PeliculasService } from '../servicios/peliculas.service';


@Component({
  selector: 'app-videoclub',
  templateUrl: './videoclub.page.html',
  styleUrls: ['./videoclub.page.scss'],
})

export class VideoclubPage implements OnInit {
  listaPeliculas: any[] = [];

  constructor(private router: Router, private peliculasService: PeliculasService) {}

  ngOnInit() {
    this.listaPeliculas = this.peliculasService.getPeliculas();
  }

  verPaginaDetalle(id: number) {
    this.router.navigate(['/detalle', id]);
  }


  // Antes de que la página entre y sea visible
ionViewWillEnter() {
  console.log('ionViewWillEnter VideoclubPage');
}

// Después de que la página esté completamente visible
ionViewDidEnter() {
  console.log('ionViewDidEnter VideoclubPage');
}

// Antes de que la página deje de ser visible
ionViewWillLeave() {
  console.log('ionViewWillLeave VideoclubPage');
}

// Después de que la página ha dejado de ser visible
ionViewDidLeave() {
  console.log('ionViewDidLeave VideoclubPage');
}

// Antes de destruir la instancia de la página
ngOnDestroy() {
  console.log('ngOnDestroy VideoclubPage');
} 
}