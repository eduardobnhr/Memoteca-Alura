import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {

  listaPensamentos = [

    {
      conteudo: 'comunicao entre componentes',
      autoria: 'angular',
      modelo: 'modelo3'
    },
    {
      conteudo: 'passo informacoes para o componente filho',
      autoria: 'componente pai',
      modelo: 'modelo1'
    },
    {
      conteudo: 'para passar informacoes entre componentes, usasse a @Input()',
      autoria: 'componente ',
      modelo: 'modelo2'
    }

  ];

}
