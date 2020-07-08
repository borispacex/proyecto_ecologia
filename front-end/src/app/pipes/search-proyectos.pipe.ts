import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchProyectos'
})
export class SearchProyectosPipe implements PipeTransform {

  transform(lista: any[], texto: string): any {
    if (!texto) { return lista; }

    return lista.filter(proyecto => proyecto.titulo.toUpperCase().includes(texto.toUpperCase()) );
  }

}
