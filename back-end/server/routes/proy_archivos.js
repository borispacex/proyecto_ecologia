const proy_archivosController = require('../controllers').proy_archivos;
const md_auth = require('../authenticated/authenticated');
const cm = require('connect-multiparty');
const md_upload = cm({
    uploadDir: './server/uploads/archivos'
});
// pruebas subida de archivos
const multer = require('multer');


// configuracion el express
module.exports = (app) => {
    app.post('/api/proy_archivo', md_auth.auth, proy_archivosController.create);
    app.put('/api/proy_archivo/:id_proy_archivo', md_auth.auth, proy_archivosController.update);
    app.get('/api/proy_archivos', md_auth.auth, proy_archivosController.getAll);
    app.get('/api/proy_archivosByIdProyecto/:id_proyecto', md_auth.auth, proy_archivosController.getAllByIdProyecto);

    app.get('/api/proy_archivosByIdTipo/:id_proyecto/:id_tipo', proy_archivosController.getProy_archivosByIdTipo);

    app.post('/api/upload-proyecto-archivo/:id_proy_archivo', md_upload, proy_archivosController.uploadArchivo);
    app.get('/api/get-archivo/:archivo', proy_archivosController.getArchivo);
    app.get('/:archivo', proy_archivosController.getArchivo);
    app.get('/api/proy_archivo/:id_proy_archivo', md_auth.auth, proy_archivosController.getById);
    app.get('/api/countProyArchivosByIdProyecto/:id_proyecto', md_auth.auth, proy_archivosController.countByIdProyecto);

    // pruebas para subir archivos
    const storage = multer.diskStorage({
        destination: (req, file, callBack) => {
            callBack(null, 'server/uploads/files')
        },
        filename: (req, file, callBack) => {
            callBack(null, `${Date.now()}${file.originalname}`) // nombre archivo
        }
    })
    const upload = multer({
        storage: storage,
        limits: {
            fileSize: 21048576
        }
    })

    //let upload = multer({ dest: 'uploads/' })
    app.post('/api/file', upload.single('file'), (req, res, next) => {
        const file = req.file;
        console.log(file.filename);
        if (!file) {
            const error = new Error('No File')
            error.httpStatusCode = 400
            return next(error)
        }
        res.send(file);
    })

    app.post('/api/multipleFiles', upload.array('files'), (req, res, next) => {
        const files = req.files;
        console.log(files);
        if (!files) {
            const error = new Error('No File')
            error.httpStatusCode = 400
            return next(error)
        }
        res.send({
            sttus: 'ok'
        });
    })


}