const Produto = (sequelize, DataTypes) => {

    let produto = sequelize.define('Produto', {
        id_produto: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nome:{
            type: DataTypes.STRING,
            allowNull: false
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: true
        },
        preco: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        imagem: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },{
        tablename: 'produto',
        timestamps: false,
        freezeTableName: true
    }
    
    )

    produto.associate = (models) => {
        produto.belongsTo(models.Editora, { foreignKey: 'fk_editora', as: 'editora' }),
        produto.belongsTo(models.Categoria, { foreignKey: 'fk_categoria', as: 'categoria' })
    }

    return produto;

}

module.exports = Produto;