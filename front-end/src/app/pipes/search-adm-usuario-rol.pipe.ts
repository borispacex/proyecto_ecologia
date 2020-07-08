import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchAdmUsuarioRol'
})
export class SearchAdmUsuarioRolPipe implements PipeTransform {

  transform(lista: any[], texto: string): any {
    if (!texto) { return lista; }

    return lista.filter(usuario_rol => usuario_rol.nombreCompleto.toUpperCase().includes(texto.toUpperCase()) );
  }

}
