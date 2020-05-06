const Editora = (sequelize, DataTypes) => {

    let editora = sequelize.define('Editora', {
        id_editora: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nome:{
            type: DataTypes.STRING,
            allowNull: true
        }
    },{
        tablename: 'editora',
        timestamps: false,
        freezeTableName: true
    }
    
    )
    
    return editora;

}

module.exports = Editora;