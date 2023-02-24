import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  url:string = 'http:loiane.com';
  cursoAngular:boolean = true;


  getvalor(){
    return 1;
  };

  getcurtirCurso(){
    return true;
  };

}
