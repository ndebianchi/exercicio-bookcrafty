const { sequelize, Endereco } = require('../models')

Endereco.findAll().then(
    data => {
        console.log(data.map(p => p.toJSON()));
        sequelize.close();
    }
)