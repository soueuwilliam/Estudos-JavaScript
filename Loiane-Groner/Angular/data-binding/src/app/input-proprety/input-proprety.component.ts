import { Component ,Input,OnInit} from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-proprety.component.html',
  styleUrls: ['./input-proprety.component.css'],
  inputs:[
    'nomeCurso'
  ],
})
export class InputPropretyComponent {
  @Input('nome') nomeCurso:string ='';
}
