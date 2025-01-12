import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), title: 'Inicio' },
  { path: 'autor', loadChildren: () => import('./autor/autor.module').then( m => m.AutorPageModule), title: 'Autor' },
  { path: 'curriculum', loadChildren: () => import('./curriculum/curriculum.module').then( m => m.CurriculumPageModule), title: 'Currículum' },
  { path: 'videoclub', loadChildren: () => import('./videoclub/videoclub.module').then( m => m.VideoclubPageModule), title: 'iVideoclub' },
  {path: 'detalle/:id', loadChildren: () => import('./detalle/detalle.module').then( m => m.DetallePageModule)
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
