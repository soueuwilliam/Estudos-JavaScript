import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursosService } from './cursos/cursos.service';
import { criarCursoModule } from './criar-curso/criar-curso.module';
import { LogService } from './shared/log.service';


@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    criarCursoModule
  ],
  providers: [CursosService,LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
