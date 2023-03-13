import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  getlocale(){
    return 'pt-BR'
  }
  constructor() { }
}
