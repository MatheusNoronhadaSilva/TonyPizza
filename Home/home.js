'use strict'

async function pegarFavoritas(){
    const endPoint ='http://localhost:3030/favoritas'
    const response = await fetch(endPoint)
    const container_fav = await response.json()
    return container_fav
}

async function pegarRecomendados(){
    const endPoint ='http://localhost:3030/recomendados'
    const response = await fetch(endPoint)
    const container_rec = await response.json()
    return container_rec
}

async function pegarCategorias(){
    const endPoint ='http://localhost:3030/categorias'
    const response = await fetch(endPoint)
    const container_cat = await response.json()
    return container_cat
}

function criarPizzaRecomendados(recomendado){

    console.log(recomendado);
  
    const listaRecomendados = document.getElementById('recomendados');
  
    const pizza = document.createElement('div');
    pizza.classList.add('pizza_rec');
  
    const imagem = document.createElement('img');
    imagem.classList.add('img_pizzas');
  
    if (recomendado.imagem) {
      imagem.src = recomendado.imagem;
    } else {
      console.error('Erro: A propriedade imagem não está definida para:', recomendado);
    }
  
    const preco = document.createElement('h3');
    preco.textContent = recomendado.preco;
  
    const nome = document.createElement('h4');
    nome.textContent = recomendado.nomePizza;
  
    listaRecomendados.appendChild(pizza);
    pizza.replaceChildren(imagem, preco, nome);
  }

function criarPizzaFavorita(favorita) {
    console.log(favorita);
  
    const listaFavoritas = document.getElementById('favoritas');
  
    const pizza = document.createElement('div');
    pizza.classList.add('pizza');
  
    const imagem = document.createElement('img');
    imagem.classList.add('img_pizzas');
  
    if (favorita.imagem) {
      imagem.src = favorita.imagem;
    } else {
      console.error('Erro: A propriedade imagem não está definida para:', favorita);
    }
  
    const preco = document.createElement('h3');
    preco.textContent = 'R$ ' + favorita.preco;
  
    const nome = document.createElement('h4');
    nome.textContent = favorita.nomePizza;
  
    listaFavoritas.appendChild(pizza);
    pizza.replaceChildren(imagem, preco, nome);
  }

  function criarPizzaCategorias(categoria){

    console.log(categoria);
  
    const listacategorias = document.getElementById('categorias');
  
    const imagem = document.createElement('img');
    imagem.classList.add('img_categoria');
  
    if (categoria.imagem) {
      imagem.src = categoria.imagem;
    } else {
      console.error('Erro: A propriedade imagem não está definida para:', categoria);
    }
  
    listacategorias.appendChild(imagem);
  }



  async function carregarFotosFavoritas() {
    const container_fav = await pegarFavoritas();
    if (container_fav !== undefined) {
        container_fav.forEach(criarPizzaFavorita);
    } else {
        console.log('ERRRRROOOOO');
    }
}

async function carregarFotosRecomendados() {
    const container_rec = await pegarRecomendados();
    if (container_rec !== undefined) {
        container_rec.forEach(criarPizzaRecomendados);
    } else {
        console.log('ERRRRROOOOO');
    }
}

async function carregarFotosCategorias() {
    const container_cat = await pegarCategorias();
    if (container_cat !== undefined) {
        container_cat.forEach(criarPizzaCategorias);
    } else {
        console.log('ERRRRROOOOO');
    }
}

carregarFotosFavoritas();
carregarFotosRecomendados();
carregarFotosCategorias();