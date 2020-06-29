const autoresController = require('../../controllers').autores;  
const md_auth = require('../../authenticated/authenticated');

// configuracion el express
module.exports = (app) => {
    app.post('/api/autor', autoresController.create);
    app.put('/api/autor/:id_autor', autoresController.update);
    app.get('/api/autores', autoresController.getAll);
    app.get('/api/autores-publi/:id_publicacion', autoresController.getAllByIdPublicacion);
    app.get('/api/autores-inv/:id_investigador', autoresController.getAllByIdInvestigador);

    app.get('/api/autor/:id_autor', autoresController.getById);
    app.delete('/api/autor/:id_autor', autoresController.deleteAutor)
    app.delete('/api/autores/:id_publicacion', autoresController.deleteAutoresByIdPublicacion)
}
