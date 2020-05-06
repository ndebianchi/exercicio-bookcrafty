const Pedido = (sequelize, DataTypes) => {

    let pedido = sequelize.define('Pedido', {
        id_pedido: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        status:{
            type: DataTypes.STRING,
            allowNull: true
        },
    },{
        tablename: 'pedido',
        timestamps: false,
        freezeTableName: true
    }
    
    )

    pedido.associate = (models) => {
        pedido.belongsTo(models.Usuario, { foreignKey: 'fk_usuario', as: 'usuario' })       
    }

    

    return pedido;

}

module.exports = Pedido;