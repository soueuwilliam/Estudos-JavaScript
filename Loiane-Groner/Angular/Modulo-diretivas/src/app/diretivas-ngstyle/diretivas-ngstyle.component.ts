import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-diretivas-ngstyle',
  templateUrl: './diretivas-ngstyle.component.html',
  styleUrls: ['./diretivas-ngstyle.component.css']
})
export class DiretivasNgstyleComponent {
  ativo:boolean = false;
  tamanhoFonte: Number = 30;

  Onclick(){
    this.ativo = !this.ativo;
  }
}
