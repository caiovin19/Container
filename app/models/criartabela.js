(async()=>{
     const database= require ('./db');
     const Conteiner=require('./conteiner');
     const Movimentacao=require('./movimentacao')
     await database.sync();
})();