const sequelize = require('./models/index');
const Donors = sequelize.import('./models/donors');


module.exports = (req, res)=>{

    Donors
        .findAll()
        .then((donors)=>{
            //return res.json({donors});
            return res.render('index.html', {donors})
        });


};