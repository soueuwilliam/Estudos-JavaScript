import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-customizadas',
  templateUrl: './diretivas-customizadas.component.html',
  styleUrls: ['./diretivas-customizadas.component.css']
})
export class DiretivasCustomizadasComponent {
  cursos: string[] = ["Angular 2"];
  mostrarCursos: boolean = false;

  Mostrarcursos(){
    this.mostrarCursos = !this.mostrarCursos;
  };
}
