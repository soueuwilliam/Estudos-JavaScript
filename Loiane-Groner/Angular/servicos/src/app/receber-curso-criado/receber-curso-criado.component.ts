import { Component } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-receber-curso-criado',
  templateUrl: './receber-curso-criado.component.html',
  styleUrls: ['./receber-curso-criado.component.css']
})
export class ReceberCursoCriadoComponent {

  curso: String = ''

  constructor (private _CursosService: CursosService){

  }

  NgOnInit(){
    this._CursosService.emitirCursoCriado.subscribe(
      cursoCriado => this.curso = cursoCriado
    )
  }
}
