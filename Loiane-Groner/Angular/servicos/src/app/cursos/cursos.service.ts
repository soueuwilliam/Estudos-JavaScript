import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from '../shared/log.service';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  emitirCursoCriado = new EventEmitter<String>();
  static criaNovoCurso = new EventEmitter<String>();

  private cursos: string[] = ['angular','java','phonegap']
  getCursos(){
    this.LogService.consoleLog('obtendo lista de cursos')
    return this.cursos;
  }

  addcurso(curso: string){
    this.LogService.consoleLog(`Criando um novo curso ${curso}`);
    this.cursos.push(curso)
    this.emitirCursoCriado.emit(curso)
    CursosService.criaNovoCurso.emit(curso)
  }
  constructor(private LogService:LogService) {
    console.log('CursosService')
   }
}
