//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigos = [];
let listaNomesSorteados = [];
let nome;

//função principal que adiciona o nome informado a uma lista

function adicionarAmigo(){
    
    nome = document.getElementById('amigo').value.toLowerCase().trim();
    if (nome == ''){

        alert('Campo vazio! Por favor, insira um nome válido');
        return;

    } else if (listaAmigos.includes(nome)){
        
        alert('Nome já adicionado na Lista! Por favor, insira um nome válido');
        limparCampo();
        return;

    } else {
        nome = primeiraLetraMaiuscula(nome);
        listaAmigos.push(nome);
        console.log(nome);
        console.log(listaAmigos);
    }

    
    document.getElementById('listaAmigos').innerHTML += '<li>' + nome + '</li>';

    limparCampo();
    nome.focus();
    
}

//Função que sorteia um dos nomes da lista
//Acabei reutilizando a função criada para sortear números do jogo do número secreto
//que foi desenvolvido anteriormente no curso da Alura
function sortearAmigo(){

    if (listaAmigos.length < 3){
        alert('É necessário um mínimo de 3 amigos para sortear!');
        return;
    }

    let numeroEscolhido = parseInt(Math.random() * listaAmigos.length + 1);

    if ( listaNomesSorteados.length == listaAmigos.length){
        alert('Todos os nomes foram sorteados!');
        return;
    }

    if (listaNomesSorteados.includes(numeroEscolhido)){
       return sortearAmigo();
    } else {
        listaNomesSorteados.push(numeroEscolhido);
        console.log(listaNomesSorteados);
        document.getElementById('resultado').innerHTML += '<li>' + 'O nome sorteado foi: ' + listaAmigos[numeroEscolhido - 1] + '</li>';
    }
    
}


//Função que limpa o campo onde se insere o nome
function limparCampo(){
    nome = document.getElementById('amigo');
    nome.value = ''
}


//função que converte strings para sempre deixar o primeiro caractere maiúsculo e o resto minúsculo
function primeiraLetraMaiuscula(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return str; // Retorna a string original se não for uma string ou estiver vazia
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}


/*
    //Inicialmente fiz uma função pra atualizar a lista, 
    // mas era complicada demais quando dava pra ser resolvida em uma linha
    //além de não funcionar, kkkkkk

function atualizarLista( texto){
    let campo = document.getElementById('listaAmigos');
    console.log('dentro do atualizar lista');
    //console.log(campo.textContent );
    console.log(texto);
    //for (const element of texto) {    
          
        let novoNome = document.createElement('li');
        novoNome.textContent = texto;
        console.log(novoNome.innerHTML);
        campo.innerHTML = novoNome;


       console.log(campo.innerHTML);
   // };
    

}


//função que exibe texto na tela
//não utilizada
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
*/

