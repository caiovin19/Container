angular.module("myApp")
.controller("conteiner", function($scope){

var Sequelize=require("sequelize");
var conteinerModel=require("../app/models/conteiner");
var movimentacaoModal=require('../app/models/movimentacao');


/*var dados = []
function validaNumber(string){
    var numString = string.replace(/[^0-9]/g,'');
    return numString
}*/



$scope.adicionarConteiner = function() {
    var conteiner = $scope.form.conteiner;
    var arrayConteiner = conteiner.split('');
    var qntNum;
    
    if ($scope.form.tipo!=20 || form.tipo!= 40){
        alert("Item incorreto!")
    }
    if ($scope.form.status!="Cheio" || form.status!="Vazio"){
        alert("Status incorreto!")
    }
    if($scope.form.categoria!="Importação"||form.categoria!="Exportação"){
        alert( "Categoria Incorreta!")
    }

        
    if(conteiner.length > 10){
        alert("Numero incorreto!")
    }else {
        qntNum = validaNumber(conteiner);
        if(qntNum >4){
            alert("Fora do padrão!");
        }
        


    }
    conteinerModel={ 
        cliente:$scope.form.cliente,
        numero_do_conteiner:$scope.form.conteiner,
        tipo:$scope.form.tipo.tipo,
        status:$scope.form.status,
        categoria:$scope.form.categoria

    }
    var buildConteiner = conteinerModel.build(conteinerModel);
    await buildConteiner.save()
}
$scope.adicionarMovimentacao = function() {
    var dataInicio=$scope.form.dataInicial;
    var dataFim=$scope.form.dataFinal;
    
    if(dataInicio>dataFim){
        alert("Data Incorreta");
    }
 

movimentacaoModal={
    tipo_de_movimentacao:$scope.form.tipoMov,
    data_inicio:$scope.form.dataInicial,
    hora_inicio:$scope.form.horaInicio,
    data_fim:$scope.form.dataFinal,
    hora_fim:$scope.form.horaFinal,
}
var buildMovimentacao = movimentacaoModal.build(movimentacaoModel);
    await buildMovimentacao.save()
}



function tabelaT() {
    if (Array.isArray(dados)) {//verificar se um array é um array
        localStorage.setItem("__dados__" , JSON.stringify(dados))

        $("#dadosjs tbody").html("")//limpar a linha para incerir uma nova tabela
        dados.forEach(function(item)//percorrer um array para adiconar dados na tabela
        {$("#dadosjs tbody").append(`<tr>
        <td>${item.Cliente}<\td>
        <td>${item.NumerodoConteiner}<\td>
        <td>${item.Tipo}<\td>
        <td>${item.Status}<\td>
        <td>${item.Categoria}<\td>
        <\tr>`)//adicionar um dado html a cada execução, **template string=`para adicionar uma nova linha`**

        })

        }
    }
$scope.adicionarMovimentacao = function(){
    if($scope.dataInicial>$scope.dataFinal){
        alert("Data incorreta")
    }
}

$(function () {//passar os dados de string para array
    dados = JSON.parse(localStorage.getItem("__dados__"))
    if (dados) {//se dados estiver com algum item, executar a func tabela
        tabelaT()
    }
    $("#Salvarb").click(function(){//para puxar da tela

    })

})
})
