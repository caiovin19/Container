

var Sequelize=require("sequelize");
var ConteinerModel=require("../app/models/conteiner");
var MovimentacaoModal=require('../app/models/movimentacao');
var deferred = require('deferred');

class Cadastro {
    async adicionarConteiner(req, res) {
    try {
        
        const { cliente, numero_do_conteiner, tipo,  status, categoria } = req.body;

        if (tipo!=20 || tipo!= 40){
            deferred.reject({
                status: 409,
                message: "Tipo invalido."
            });
        }
        if (status!="Cheio" || status!="Vazio"){
            deferred.reject({
                status: 409,
                message: "Status Invalido."
            });
        }
        if(categoria!="Importação"||categoria!="Exportação"){
            deferred.reject({
                status: 409,
                message: "Cadegoria invalida."
            });
        }
        
        const c = await ConteinerModel.create({ 
            cliente:cliente,
            numero_do_conteiner:numero_do_conteiner,
            tipo:tipo,
            status:status,
            categoria:categoria
    
        });
        return res.send({'message': c})
        
      } catch (error) {
        
        return res.send({'message': 'help'})
      }
    }
    async adicionarMovimentacao(req, res) {
        try {
            const { tipo_de_movimentacao, data_inicio, hora_inicio,  data_fim, hora_fim } = req.body;
            if(data_inicio > data_fim){
                deferred.reject({
                    status: 409,
                    message: "Data Invalido."
                });
            }
            const M = await MovimentacaoModal.create({ 
                tipo_de_movimentacao:tipo_de_movimentacao,
                data_inicio:data_inicio,
                hora_inicio:hora_inicio,
                data_fim:data_fim,
                hora_fim:hora_fim
        
            });
            return res.send({'message': M})

        } catch (error) {
            return res.send({'message': 'help'})
          }
        }

    async consultarConteiner(req, res){
        try {
            ConteinerModel.findAll().then((data) => {
                res.json(data);
              });
        } catch (error) {
            return res.send({'message': 'help'})
        }      

    }
    async consultarMovimentacao(req, res){
        try {
            MovimentacaoModal.findAll().then((data) => {
                res.json(data);
              });
        } catch (error) {
            return res.send({'message': 'help'})
        }
        
    }
    async editarConteiner(req, res) {
        try {
            
            var conteinerEditar = req.body
            const conteinerExistente = await ConteinerModel.findAll({ where: { 'cliente': req.body.cliente, 'numero_do_conteiner': req.body.numero_do_conteiner } })
            
            if(conteinerExistente){
                try {
                    
                    var map1 = conteinerExistente.map(({ status }) => status);
                    var map2 = conteinerExistente.map(({ categoria }) => categoria);
                    var map3 = conteinerExistente.map(({ cliente }) => cliente);
                    var map4 = conteinerExistente.map(({ tipo }) => tipo);
                    var map5 = conteinerExistente.map(({ numero_do_conteiner }) => numero_do_conteiner);
                    var id = conteinerExistente.map(({ id_cliente }) => id_cliente);
                    id = id[0];
                    
                    conteinerExistente.cliente = conteinerEditar.cliente !== undefined? conteinerEditar.cliente : map3[0];                   
                    conteinerExistente.numero_do_conteiner = conteinerEditar.numero_do_conteiner !== undefined? conteinerEditar.numero_do_conteiner : map5[0];                   
                    conteinerExistente.tipo = conteinerEditar.tipo !== undefined? conteinerEditar.tipo : map4[0];                   
                    conteinerExistente.status = conteinerEditar.status !== undefined? conteinerEditar.status : map1[0]                  
                    conteinerExistente.categoria = conteinerEditar.categoria !== undefined? conteinerEditar.categoria : map2[0]
                    console.log(conteinerExistente)
                         
                   return ConteinerModel.update(conteinerExistente, {where :{id_cliente : id}}).then(() =>  
                    res.send({'message': "salvou"}))
               
                } catch (error) {
                    return res.send({'message': error })
                }
                
            }else{
                return res.send({'message': 'Conteiner inexistente para realizar edição'})
            }
                     
        } catch (error) {
            return res.send({'message': error})
        }

    }
    async editarMovimentacao(req, res){
        try {
            
            var movimentacaoEditar = req.body
            const movimentacaoExistente = await MovimentacaoModal.findAll({ where: { 'tipo_de_movimentacao': req.body.tipo_de_movimentacao} })
            
            if(movimentacaoExistente){
                try {
                    
                    var map1 = movimentacaoExistente.map(({ data_inicio }) => data_inicio);
                    var map2 = movimentacaoExistente.map(({ data_fim }) => data_fim);
                    var map3 = movimentacaoExistente.map(({ hora_inicio }) => hora_inicio);
                    var map4 = movimentacaoExistente.map(({ hora_fim }) => hora_fim);
                    var map5 = movimentacaoExistente.map(({ tipo_de_movimentacao }) => tipo_de_movimentacao);
                    var id = movimentacaoExistente.map(({ id }) => id);
                    id = id[0];
                    
                    movimentacaoExistente.data_inicio = movimentacaoEditar.data_inicio !== undefined? movimentacaoEditar.data_inicio : map1[0];                   
                    movimentacaoExistente.data_fim = movimentacaoEditar.data_fim !== undefined? movimentacaoEditar.data_fim : map2[0];                   
                    movimentacaoExistente.hora_inicio = movimentacaoEditar.hora_inicio !== undefined? movimentacaoEditar.hora_inicio : map3[0];                   
                    movimentacaoExistente.hora_fim = movimentacaoEditar.hora_fim !== undefined? movimentacaoEditar.hora_fim : map4[0]                  
                    movimentacaoExistente.tipo_de_movimentacao = movimentacaoEditar.tipo_de_movimentacao !== undefined? movimentacaoEditar.tipo_de_movimentacao : map5[0]
                    console.log(movimentacaoExistente)
                         
                   return MovimentacaoModal.update(movimentacaoExistente, {where :{id : id}}).then(() =>  
                    res.send({'message': "salvou"}))
               
                } catch (error) {
                    return res.send({'message': error })
                }
                
            }else{
                return res.send({'message': 'Movimentação inexistente para realizar edição'})
            }
                     
        } catch (error) {
            return res.send({'message': error})
        }
    }
    async removerConteiner(req, res){
        try {
            const conteinerExistente = await ConteinerModel.findAll({ where: { 'cliente': req.body.cliente, 'numero_do_conteiner': req.body.numero_do_conteiner } })
            if (conteinerExistente) {
                var id = conteinerExistente.map(({ id_cliente }) => id_cliente);
                id = id[0];
                return await ConteinerModel.destroy({ where: { id_cliente: id } }).success(function() {
                    res.send({ 'message': "Deletado" })
                })
                    
            }else{
                return res.send({ 'message': 'container não encontrado' })
            }
        } catch (error) {
            return res.send({ 'message': 'help' })
        }
        
    }
    async removerMovimentacao(req, res){
        try {
            const movimentacaoExistente = await MovimentacaoModal.findAll({ where: { 'cliente': req.body.cliente, 'numero_do_conteiner': req.body.numero_do_conteiner } })
            if (movimentacaoExistente) {
                
                var id = movimentacaoExistente.map(({ id }) => id);
                id = id[0];
                return await MovimentacaoModal.destroy({ where: { id: id } }).success(function() {
                    res.send({ 'message': "Deletado" })
                })
            }else{
                return res.send({ 'message': 'Movimentação não encontrada' })
            }
        } catch (error) {
            return res.send({ 'message': 'help' })
        }
    }
}

module.exports = new Cadastro();