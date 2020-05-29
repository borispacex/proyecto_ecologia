import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchArchivos'
})
export class SearchArchivosPipe implements PipeTransform {

  transform(lista: any[], texto: string): any {
    if (!texto) { return lista; }

    return lista.filter(archivo => archivo.nombre.toUpperCase().includes(texto.toUpperCase()) );
  }

}
