import { Component } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  cursos: string[] = [];
  //cursoService: CursosService;



  constructor(private cursoService: CursosService){
    //this.cursoService = new CursosService()
    //this.cursoService = cursoService;
  }

  ngOnInit(){
    this.cursos = this.cursoService.getCursos();

    CursosService.criaNovoCurso.subscribe(
       curso=>console.log(curso)

    );
  }
}
