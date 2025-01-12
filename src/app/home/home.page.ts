import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
// Se ejecuta una vez al inicializar la página
ngOnInit() {
  console.log('ngOnInit HomePage');
}

// Antes de que la página entre y sea visible
ionViewWillEnter() {
  console.log('ionViewWillEnter HomePage');
}

// Después de que la página esté completamente visible
ionViewDidEnter() {
  console.log('ionViewDidEnter HomePage');
}

// Antes de que la página deje de ser visible
ionViewWillLeave() {
  console.log('ionViewWillLeave HomePage');
}

// Después de que la página ha dejado de ser visible
ionViewDidLeave() {
  console.log('ionViewDidLeave HomePage');
}

// Antes de destruir la instancia de la página
ngOnDestroy() {
  console.log('ngOnDestroy HomePage');
}
}