import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchInvestigadores'
})
export class SearchInvestigadoresPipe implements PipeTransform {

  transform(lista: any[], texto: string): any {
    if (!texto) { return lista; }

    return lista.filter(investigador => investigador.nombreCompleto.toUpperCase().includes(texto.toUpperCase()) );
  }

}
