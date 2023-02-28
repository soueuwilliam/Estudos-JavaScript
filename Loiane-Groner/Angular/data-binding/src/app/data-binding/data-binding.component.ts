import { Component,Input,Output,EventEmitter } from '@angular/core';
import { textSpanIntersectsWithTextSpan } from 'typescript';



@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.css']

  styles:[
    `
      .highligth{
        background-color: yellow;
        font-weight: bold;
      }

    `
  ]

})
export class DataBindingComponent {

  url:string = 'http:loiane.com';
  urlImagem  = 'http://lorempixel.com.br/400/200/'
  cursoAngular:boolean = true;
  valoratual:string = '';
  valorsalvo:string = '';

  ismouseover:boolean = false;
  nome: string = 'abc';
  pessoa:any = {
    nome:"pesosa",
    idade: 20,
  }

  nomedocurso:string = 'Angular';

  Onkeyup(evento:KeyboardEvent){
    this.valoratual =((<HTMLInputElement>evento.target).value);

  };
  SalvarValor(valor:any){
    this.valorsalvo = ((<HTMLInputElement>valor.target).value);
  };
  Salvarnome(nome:any){
    this.nome = ((<HTMLInputElement>nome.target).value);
  };

  OnMouseOverOut(){
    this.ismouseover = !this.ismouseover
  };
  botaoclicado(){
    alert('Botão clicado!')
  };
  getvalor(){
    return 1;
  };

  getcurtirCurso(){
    return true;
  };

  onMudouvalor(evento:any){
    console.log(evento.novovalor);
  };
}
