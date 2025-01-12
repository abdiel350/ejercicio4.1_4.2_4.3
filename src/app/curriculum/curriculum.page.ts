import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.page.html',
  styleUrls: ['./curriculum.page.scss'],
})
export class CurriculumPage implements OnInit {

  listaTrabajos: { fecha: string, desc: string }[];

  constructor() {
    this.listaTrabajos = [
      { fecha: '2010-actualidad', desc: 'Profesor del Máster Universitario en Desarrollo de Software para Dispositivos Móviles.' },
      { fecha: '2015-actualidad', desc: 'Profesor del Máster Universitario en Desarrollo de Aplicaciones y Servicios Web.' }
    ];

   }
// Se ejecuta una vez al inicializar la página
ngOnInit() {
  console.log('ngOnInit CurriculumPage');
}

// Antes de que la página entre y sea visible
ionViewWillEnter() {
  console.log('ionViewWillEnter CurriculumPage');
}

// Después de que la página esté completamente visible
ionViewDidEnter() {
  console.log('ionViewDidEnter CurriculumPage');
}

// Antes de que la página deje de ser visible
ionViewWillLeave() {
  console.log('ionViewWillLeave CurriculumPage');
}

// Después de que la página ha dejado de ser visible
ionViewDidLeave() {
  console.log('ionViewDidLeave CurriculumPage');
}

// Antes de destruir la instancia de la página
ngOnDestroy() {
  console.log('ngOnDestroy CurriculumPage');
}
}