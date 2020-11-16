import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchDifusiones'
})
export class SearchDifusionesPipe implements PipeTransform {

  transform(lista: any[], texto: string): any {
    if (!texto) { return lista; }

    return lista.filter(difusion => difusion.titulo.toUpperCase().includes(texto.toUpperCase()) );
  }

}
