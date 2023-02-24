import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getcursos(){
    return ['java','Ext js', 'Angular']
  }
}
