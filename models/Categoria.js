const Categoria = (sequelize, DataTypes) => {

    let categoria = sequelize.define('Categoria', {
        id_categoria: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nome:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        tablename: 'categoria',
        timestamps: false,
        freezeTableName: true
    }
    
    )    

    return categoria;

}

module.exports = Categoria;