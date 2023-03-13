import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipe',
  templateUrl: './exemplos-pipe.component.html',
  styleUrls: ['./exemplos-pipe.component.css']
})
export class ExemplosPipeComponent {

  livro: any = {
    titulo: 'learning javascritp data structures and algorithms 2nd ed',
    rating: 4.54321,
    numeroPaginas:314,
    preco: 44.99,
    dataLancamento: new Date(2016,5,23),
    url: 'http://a.co/glqjpRP'

  }
}
