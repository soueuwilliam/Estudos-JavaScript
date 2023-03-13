import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  consoleLog(msg:string){
    return console.log(msg);
  };
  constructor() { }
}
