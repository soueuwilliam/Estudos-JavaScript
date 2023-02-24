import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit{

  nomeportal:string;
  cursos:string[];

  constructor(CursosService : CursosService){
    this.nomeportal = 'https://loiane.training/'


    this.cursos = CursosService.getcursos()
    

  }

  ngOnInit():void {

  }
}
