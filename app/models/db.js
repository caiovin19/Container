const Sequelize = require('sequelize');


const sequelize = new Sequelize("conteiner", "root", "Cc@36633141",{
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
  sequelize.authenticate()
  .then(function(){
    console.log("CONNECTION WITH BASEDATA OK")
  }).catch(function(){
    console.log("CONNECTION WITH BASEDATA NO OK")
  })
  
module.exports=sequelize;