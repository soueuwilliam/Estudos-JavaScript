import { CursosModule } from './cursos/cursos.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MeuPrimeiroComponet } from './Meu-primeiro/Meu-primeiro.component';
import { MeuPrimerio2Component } from './meu-primerio2/meu-primerio2.component';




@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponet,
    MeuPrimerio2Component


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
