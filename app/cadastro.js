angular.module("myApp")
.controller("conteiner", function($scope){
$scope.form = {};




/*var dados = []
function validaNumber(string){
    var numString = string.replace(/[^0-9]/g,'');
    return numString
}



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
};*/



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

        let cliente= $("#txtCliente").val();
        let tipo= $("#txtNumerodoConteiner").val();
        let tipoConteiner=$("#txtTipo").val();
        let status=$("#txtStatus").val();
        let categoria=$("#txtCategoria").val();

        let registro={};
        registro.cliente=cliente
        registro.tipo=tipo
        registro.tipoConteiner=tipoConteiner
        registro.status=status
        registro.categoria=categoria

        registro.ID=dados.length+1
        dados.push(registro);
        swal("Registro Salvo", "lalal", "sucess");
       
        $(".modalRegistro").modal('hide');//para fechar a modal

        $("#txtCliente").val("")//para limpar o modal
        $("#txtNumerodoConteiner").val("")
        $("#txtTipo").val("")
        $("#txtStatus").val("")
        $("#txtCategoria").val("")
        tabelaT()

    })


    
})
})
