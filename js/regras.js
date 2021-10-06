//const adicionando = document.querySelector("#adicionar");
let localresult = "";
var mensagem = "";
const sorteados =[];

function sortear(){
    var validador = document.getElementById("Botao1").innerText;
    var qtd = document.getElementById("qtd").value;
    var inicio = document.getElementById("inicio").value;
    var fim = document.getElementById("fim").value;
    if (isNaN(qtd) == true || qtd == "" || isNaN(inicio) == true || inicio == "" ||
    isNaN(fim) == true || fim == ""){
        alert("Favor verificar os valores fornecidos!");
    }else{
        if (validador == "Sortear"){
            rodando = 0;
            
            //alert("fim " + qtd + " inicio " + inicio + " fim " + fim);
            while(rodando < qtd){
                const sorteio = sorteando(inicio,fim);
                const buscado = sorteados.find(element => element == sorteio);
                
                if (buscado == undefined){
                    sorteados.push(sorteio);
                    var mensagem = (rodando+1) +"º Sorteado : " + sorteio;
                    //alert(sorteio);
                    //localresult += '<b>Hello World!</b>';
                    
                    var lista  = document.getElementById("lista").innerHTML;
                    lista = lista +"<li>"+mensagem+"</li>";
            
            document.getElementById("lista").innerHTML = lista;
                    rodando ++;
                }
                    
            }  
            document.getElementById("Botao1").innerText = "Reiniciar";
        }
        else{
        //document.getElementById("Botao1").innerText = "Sortear";
        window.location.reload(); 
           }       }          
}
   

function sorteando(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function adicionar(msg) {
    var ing = document.getElementById("qtd").value;
    var lista  = document.getElementById("lista").innerHTML;
    lista = lista +"<li>"+ing+"</li>";
    
    document.getElementById("lista").innerHTML = lista;
  }


  
