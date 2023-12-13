'use strict';

async function pegarImagens() {
    const endPoint = 'http://localhost:8080/api';
    const response = await fetch(endPoint);
    const imagens = await response.json();
    return imagens;
}

function criarTagImg(imagem) {
    const nome1 = document.getElementById('nome_comentario');
    const data1 = document.getElementById('data');

    // Verifica se há recomendações e comentários
    if (imagem.recomendados && imagem.recomendados.length > 0 &&
        imagem.recomendados[0].comentarios && imagem.recomendados[0].comentarios.length > 0) {
        
        const nome1h4 = document.createElement('h4');
        const data1p = document.createElement('p');

        // Ajusta para acessar os valores corretos
        nome1h4.textContent = imagem.recomendados[0].comentarios[0].usuario;
        data1p.textContent = imagem.recomendados[0].comentarios[0].data;

        // Limpa os conteúdos antigos antes de adicionar os novos
        nome1.innerHTML = '';
        data1.innerHTML = '';

        nome1.appendChild(nome1h4);
        data1.appendChild(data1p);

        console.log(nome1h4);
        console.log(data1p);
    } else {
        console.log('Não esta acahando.');
    }
}

async function carregarFotos() {
    const imagens = await pegarImagens();
    if (imagens !== undefined) {
        imagens.forEach(criarTagImg);
    } else {
        console.log('ERRRRROOOOO');
    }
}

carregarFotos();
