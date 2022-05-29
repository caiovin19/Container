const Sequelize=require('sequelize');
const db=require('./db');

var Movimentacao=db.define('movimentacaos', {
    tipo_de_movimentacao:{
        type:Sequelize.STRING, 
        field:'tipo_de_movimentacao', 
        allowNull:false

     },
     data_inicio:{
         type:Sequelize.DATE, 
         field:'data_inicio', 
         allowNull:false, 
         defaultValue:false

     },
    hora_inicio:{
        type:Sequelize.TIME, 
        field:'hora_inicio', 
        allowNull:false

     },
     data_fim:{
         type:Sequelize.DATE, 
         field:'data_fim', 
         allowNull:true, 
         defaultValue:false

     },
     hora_fim:{
         type:Sequelize.TIME, 
         field:'hora_fim', 
         allowNull:true, 
         defaultValue:false}


})
Movimentacao.sync();
module.exports= Movimentacao;