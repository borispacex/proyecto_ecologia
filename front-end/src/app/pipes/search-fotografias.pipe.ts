import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFotografias'
})
export class SearchFotografiasPipe implements PipeTransform {

  transform(lista: any[], texto: string): any {
    if (!texto) { return lista; }

    return lista.filter(fotografia => fotografia.descripcion.toUpperCase().includes(texto.toUpperCase()) );
  }

}
