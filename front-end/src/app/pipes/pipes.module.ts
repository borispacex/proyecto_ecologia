import { NgModule } from '@angular/core';
import { SearchArchivosPipe } from './search-archivos.pipe';
import { SearchDifusionesPipe } from './search-difusiones.pipe';
import { SearchProyectosPipe } from './search-proyectos.pipe';
import { SearchInvestigadoresPipe } from './search-investigadores.pipe';
import { SearchAdmUsuarioRolPipe } from './search-adm-usuario-rol.pipe';
import { SearchFotografiasPipe } from './search-fotografias.pipe';


@NgModule({
    declarations: [
        SearchArchivosPipe,
        SearchDifusionesPipe,
        SearchProyectosPipe,
        SearchInvestigadoresPipe,
        SearchAdmUsuarioRolPipe,
        SearchFotografiasPipe
    ],
    imports: [],
    exports: [
        SearchArchivosPipe,
        SearchDifusionesPipe,
        SearchProyectosPipe,
        SearchInvestigadoresPipe,
        SearchAdmUsuarioRolPipe,
        SearchFotografiasPipe
    ]
})
export class PipesModule { }
