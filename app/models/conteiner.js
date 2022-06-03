const Sequelize=require('sequelize');
const db=require('./db');

var Conteiner=db.define('conteiners',{
     id_cliente:{
         type: Sequelize.INTEGER,
         autoIncrement: true, primaryKey: true,
         field: 'id_cliente'
     },
     cliente:{
         type:Sequelize.STRING, 
        field:'cliente', 
        allowNull:false

     },
     numero_do_conteiner:{
         type:Sequelize.STRING, 
        field:'numero_do_conteiner', 
        allowNull:false

     },
     tipo:{
         type:Sequelize.STRING, 
        field:'tipo', 
        allowNull:false

     },
     status:{
         type:Sequelize.STRING, 
        field:'status', 
        allowNull:false

     },
     categoria:{
         type:Sequelize.STRING, 
         field:'categoria', 
         allowNull:false

     }
});


Conteiner.sync();

module.exports= Conteiner;

