import { NgModule } from '@angular/core';
import { SearchArchivosPipe } from './search-archivos.pipe';
import { SearchDifusionesPipe } from './search-difusiones.pipe';
import { SearchProyectosPipe } from './search-proyectos.pipe';
import { SearchInvestigadoresPipe } from './search-investigadores.pipe';
import { SearchAdmUsuarioRolPipe } from './search-adm-usuario-rol.pipe';


@NgModule({
    declarations: [
        SearchArchivosPipe,
        SearchDifusionesPipe,
        SearchProyectosPipe,
        SearchInvestigadoresPipe,
        SearchAdmUsuarioRolPipe
    ],
    imports: [],
    exports: [
        SearchArchivosPipe,
        SearchDifusionesPipe,
        SearchProyectosPipe,
        SearchInvestigadoresPipe,
        SearchAdmUsuarioRolPipe
    ]
})
export class PipesModule { }
