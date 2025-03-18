//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigo à lista
function adicionarAmigo() {
    const nome = document.getElementById('amigo').value.trim();
    if (nome) {
        amigos.push(nome);
        document.getElementById('amigo').value = ''; // Limpa o campo de entrada
        atualizarLista();
    } else {
        alert('Por favor, insira um nome!');
    }
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista antes de adicionar novos nomes

    // Adiciona cada amigo à lista HTML
    amigos.forEach(function(amigo) {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear o amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para sortear!');
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa o resultado anterior

    // Sorteio simples: cada amigo sorteia o próximo da lista
    for (let i = 0; i < amigos.length; i++) {
        const amigo = amigos[i];
        const amigoSorteado = amigos[(i + 1) % amigos.length]; // Sorteia o próximo
        const li = document.createElement('li');
        li.textContent = `${amigo} tirou ${amigoSorteado}`;
        resultado.appendChild(li);
    }
}
