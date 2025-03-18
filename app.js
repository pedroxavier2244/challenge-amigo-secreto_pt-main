//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const listaAmigos = document.getElementById('listaAmigos');
    const resultado = document.getElementById('resultado');

    
    if (inputAmigo.value.trim() === '') {
        alert('Por favor, digite um nome válido.');
        return;
    }


    const novoAmigo = document.createElement('li');
    novoAmigo.textContent = inputAmigo.value;
    listaAmigos.appendChild(novoAmigo);


    inputAmigo.value = '';
    resultado.textContent = ''; 
}


function sortearAmigo() {
    const listaAmigos = document.getElementById('listaAmigos');
    const resultado = document.getElementById('resultado');
    const amigos = listaAmigos.getElementsByTagName('li');


    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo para sortear.');
        return;
    }


    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado].textContent;


    resultado.textContent = `O amigo secreto é: ${amigoSorteado}`;
}


document.getElementById('amigo').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        adicionarAmigo();
    }
});