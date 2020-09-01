import { Component } from '@angular/core';

type Filme = {
  nome: string;
  categoria: string;
  nota: number;

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aula1';

  filmes: Filme[] =[
    {nome: 'Constantine', categoria: 'Ação', nota: 9},
    {nome: 'Titanic', categoria: 'Drama', nota: 8},
    {nome: 'Velozes e Furiosos', categoria: 'Ação', nota: 7},
    {nome: 'Batman', categoria: 'Ação', nota: 9},
    {nome: 'Titanic', categoria: 'Drama', nota: 8},
    {nome: 'Velozes e Furiosos', categoria: 'Ação', nota: 7},
    {nome: 'Titanic', categoria: 'Drama', nota: 8},
    {nome: 'Velozes e Furiosos', categoria: 'Ação', nota: 7},
  ]
  
}
