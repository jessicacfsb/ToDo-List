var texto = document.getElementById("texto-digitado")
var botao = document.getElementById("botao-adicionar")
var ul = document.getElementById("ul")

function textoTotal() {
    return texto.value.length  
}

function criarLista() {
    var li = document.createElement("li")
}
function cadastrar() {
    if (textoTotal() > 0 ){
        criarLista()
    }else{
    window.alert("ERRO - Digite alguma atividade")
    }   
}

function cadastrar_texto() {
    if (textoTotal() > 0 && event.which === 13) {
        criarLista()
    }    
}

botao.addEventListener("click", cadastrar)
texto.addEventListener("keypress", cadastrar_texto)