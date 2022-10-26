import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./inicio/inicio.component";
import {TrabajosComponent} from "./trabajos/trabajos.component";

const routes: Routes = [
  {path: 'inicio',component:InicioComponent},
  {path: 'trabajos',component:TrabajosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
