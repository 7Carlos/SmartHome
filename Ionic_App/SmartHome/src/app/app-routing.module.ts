import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'luces', loadChildren: './luces/luces.module#LucesPageModule' },
  { path: 'alarmas', loadChildren: './alarmas/alarmas.module#AlarmasPageModule' },
  { path: 'camara', loadChildren: './camara/camara.module#CamaraPageModule' },
  { path: 'puertas', loadChildren: './puertas/puertas.module#PuertasPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
