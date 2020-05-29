const adm_roles = require('../models').adm_roles;

function create(req, res) {
    var body = req.body;
    adm_roles.create(body)
        .then(roles => {
            res.status(200).send({ roles });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio error al guardar el rol', err });
        });
}
function update(req, res) {
    var id = req.params.id_rol;
    var body = req.body;
    adm_roles.findByPk(id)
        .then(rol => {
            rol.update(body)
                .then(() => {
                    res.status(200).send({ rol });
                })
                .catch(err => {
                    res.status(500).send({ message: 'Ocurrio un error al actualizar el rol', err });
                });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar el rol', err });
        });
}

module.exports = {
    create,
    update
}
