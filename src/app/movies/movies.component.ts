import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent{

  @Input()  nome: string;
  @Input()  nota: number;
  @Input()  categoria: string;

  onClickVote(){
    alert(`Voto para o filme ${this.nome} confirmado!`)
  }
}
