const sequelize = require('./conexao');

module.exports = (sequelize, DataTypes)=>{
    return sequelize.define('donors',{
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        blood: DataTypes.STRING
    },{
        //Options timestamps, relations,  etc...
    });
};
