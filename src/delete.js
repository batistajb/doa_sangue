const sequelize = require('./models/conexao');
const Donors = sequelize.import('./models/donors');


module.exports = (req, res)=>{
    Donors
        .destroy({where:{id:req.params.id}})
        .then(()=>{
            Donors
                .findAll({limit:6})
                .then((donors)=>{
                    //return res.json({donors});
                    return res.render('index.html', {donors})
                });
        });


};