angular.module("myApp")
.controller("conteiner", function($scope){
$scope.form = {};




var dados = []

$scope.adicionarItens = function() {
    var conteiner = $scope.form.conteiner;
    var arrayConteiner = conteiner.split('');
    var contNumeros, contString;
    for(var i = 0 ; i< arrayConteiner.length ; i++){
        if(i<=3){
            if(!isNumber(arrayConteiner[i])){
                contString ++;
            }
        }
        if(contString!=4){
            alert("Container precisa ter 4 numeros");
        }

    }
    
    if(conteiner.length > 10){
        alert("Numero incorreto")
    }else if(conteiner){

    }
};


function tabelaT() {
    if (Array.isArray(dados)) {//verificar se um array é um array

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

$(function () {//passar os dados de string para array
    dados = JSON.parse(localStorage.getItem("_dados_"))
    if (dados) {//se dados estiver com algum item, executar a func tabela
        tabelaT()
    }
})
})
