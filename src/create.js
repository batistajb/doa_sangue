const sequelize = require('./models/index');
const Donors = sequelize.import('./models/donors');


module.exports = (req, res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const blood= req.body.blood;

    if(name === "" || email === "" || blood === "" ){
        return res.send('Todos os campos são obrigatórios.');
    }

    Donors
        .create(req.body)
        .then(()=>{
            return res.redirect('/');
        });

    /*const values = [name,email,blood];

    const query = "INSERT INTO donors ('name','email','blood') VALUES ("  + values +")";*/

};