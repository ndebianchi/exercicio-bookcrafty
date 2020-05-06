const Usuario = (sequelize, DataTypes) => {

    let usuario = sequelize.define('Usuario', {
        id_usuario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nome:{
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },{
        tablename: 'usuario',
        timestamps: false,
        freezeTableName: true
    }
    
    )

    return usuario;

}

module.exports = Usuario;