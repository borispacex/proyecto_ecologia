import { NgModule } from '@angular/core';
import { SearchArchivosPipe } from './search-archivos.pipe';
import { SearchDifusionesPipe } from './search-difusiones.pipe';


@NgModule({
    declarations: [
        SearchArchivosPipe,
        SearchDifusionesPipe
    ],
    imports: [],
    exports: [
        SearchArchivosPipe,
        SearchDifusionesPipe
    ]
})
export class PipesModule { }
