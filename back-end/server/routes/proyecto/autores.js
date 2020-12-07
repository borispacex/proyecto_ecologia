const autoresController = require('../../controllers').autores;  
const md_auth = require('../../authenticated/authenticated');

// configuracion el express
module.exports = (app) => {
    app.post('/api/autor', autoresController.create);
    app.put('/api/autor/:id_autor', autoresController.update);
    app.get('/api/autores', autoresController.getAll);
    app.get('/api/autores-publi/:id_publicacion', autoresController.getAllByIdPublicacion);
    app.get('/api/autores-inv/:id_investigador', autoresController.getAllByIdInvestigador);
    app.get('/api/autores-inv-distict/:id_investigador', autoresController.getAllByIdInvestigadorDistinct);

    app.get('/api/autor/:id_autor', autoresController.getById);
    app.delete('/api/autor/:id_autor', autoresController.deleteAutor);
    app.delete('/api/autores/:id_publicacion', autoresController.deleteAutoresByIdPublicacion);

    app.get('/api/autoresByEstado/:estado', autoresController.getAllByEstado);
    app.get('/api/autoresByIdPublicacionAndEstado/:id_publicacion/:estado', autoresController.getAllByIdPublicacionAndEstado);
    app.get('/api/autoresByIdInvestigadorAndEstado/:id_investigador/:estado', autoresController.getAllByIdInvestigadorAndEstado);
}
