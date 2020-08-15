const proy_archivosController = require('../controllers').proy_archivos;
const md_auth = require('../authenticated/authenticated');
const cm = require('connect-multiparty');
const md_upload = cm({ uploadDir: './server/uploads/archivos' });

// pruebas subida de archivos
const multer = require('multer');
var fileExtension = require('file-extension')

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

    // PRUEBAS PARA SUBIR ARCHIVO

    // Configurar almacenamiento
    var storage = multer.diskStorage({
        // Configuración del directorio en el disco para guardar archivos cargados
        destination: function (req, file, cb) {
            cb(null, 'server/uploads/files')
        },
        // Configuración del nombre del archivo guardado
        filename: function (req, file, cb) {
            var split = file.originalname.split('.');
            var name_file = split[0];
            if (name_file.length > 22) {
                cb(null, name_file.substring(0, 22) + '-' + Date.now() + '.' + fileExtension(file.originalname))
            } else {
                cb(null, name_file + '-' + Date.now() + '.' + fileExtension(file.originalname))
            }
            
        }
    })

    var upload = multer({
        storage: storage,
        limits: {
            // Establecer el límite de tamaño de la imagen en 100 MB
            fileSize: 100000000
        },
        fileFilter(req, file, cb) {
            if (!file.originalname.match(/\.(pdf|jpg|jpeg|png)$/)) {
                //Error 
                cb(new Error('¡Cargue solo imágenes JPG, PNG y PDF!'))
            }
            // Success 
            cb(undefined, true)
        }
    })

    app.post('/api/uploadfile', upload.single('file'), (req, res, next) => {
        const file = req.file;
        // console.log(req);
        if (!file) {
            const error = new Error('Por favor, sube un archivo!')
            error.httpStatusCode = 400
            return next(error)
        }
        res.status(200).send({
            statusCode: 200,
            status: 'success',
            uploadedFile: file
        })
    }, (error, req, res, next) => {
        res.status(400).send({
            error: error.message
        })
    })
    app.post('/api/multipleUploadfiles', upload.array('files'), (req, res, next) => {
        const files = req.files;
        // console.log(req);
        if (!files) {
            const error = new Error('Por favor, sube los archivos!')
            error.httpStatusCode = 400
            return next(error)
        }
        res.status(200).send({
            statusCode: 200,
            status: 'success',
            uploadedFile: files
        })
    }, (error, req, res, next) => {
        res.status(400).send({
            error: error.message
        })
    })

}