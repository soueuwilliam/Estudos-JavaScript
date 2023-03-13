import { Component } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';
@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css']
})
export class CriarCursoComponent {
    cursos: string[] = []

    Onaddcurso(curso: string){
      this.cursosService.addcurso(curso)
    }
  constructor(private cursosService: CursosService){


  }

  ngOnInit(){
    this.cursos = this.cursosService.getCursos();
  }
}
