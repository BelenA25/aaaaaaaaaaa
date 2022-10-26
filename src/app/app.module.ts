import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { TrabajosComponent } from './trabajos/trabajos.component';
import { SaludaComponent } from './saluda/saluda.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    TrabajosComponent,
    SaludaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
