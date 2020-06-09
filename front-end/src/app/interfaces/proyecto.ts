export interface Proyecto {
    id_proyecto: number;
    id_adm: number;
    id_coordinador: number;
    titulo: string;
    proceso: number;
    fechaini: Date;
    fechafin: Date;
    estado: string;
    createdAt: Date;
    updatedAt: Date;
    fotos: Array<string>;
    investigadore: any;
    investigadores: Array<any>;
    persona: any;
}
