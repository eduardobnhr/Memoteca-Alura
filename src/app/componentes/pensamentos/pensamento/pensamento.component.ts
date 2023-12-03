import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {

    @Input() pensamento = {
    conteudo: 'amo o angular',
    autoria: 'luis eduardo',
    modelo: 'modelo3'
  }

}
