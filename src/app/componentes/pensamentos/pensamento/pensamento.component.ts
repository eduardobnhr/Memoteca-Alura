import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit{

    @Input() pensamento: Pensamento = {
      id: 0,
      conteudo: 'amo o angular',
      autoria: 'luis eduardo',
      modelo: 'modelo3',
      favorito: false
  }
  larguraPensamento(): string{
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }
  mudarIconeFavorito():string {
    if(this.pensamento.favorito == false){
      return 'inativo'
    }
    return 'ativo'
  }

  constructor(){ }

  ngOnInit(): void {

  }

}
