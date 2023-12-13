
var api = require('./API')
const apiJson = api.API

const getListaPizzas = function () {
  let todasPizzas = apiJson.favoritas.slice();
  todasPizzas.push.apply(todasPizzas, apiJson.Recomendados);
  
  let listaPizzas = [];
  let status = false;

  for (let i = 0; i < todasPizzas.length; i++) {
    let pizza = todasPizzas[i];
    let pizzaInfo = {
      nomePizza: pizza.nomePizza,
      preco: pizza.preco
    };

    listaPizzas.push(pizzaInfo);
    status = true;
  }

  let resultado = {
    pizzas: listaPizzas,
    quantidade: listaPizzas.length
  };

  if (status) {
    return resultado;
  } else {
    return false;
  }
};

const getListaCadastros = function () {
  return {
    cadastros: apiJson.cadastros,
    quantidade: apiJson.cadastros.length
  };
};

const getListaBebidas = function () {
  const TonyPizzaria_Bebidas = apiJson.bebidas 
  return  TonyPizzaria_Bebidas
};

const getListaRecomendados = function () {
  const TonyPizzaria_recomendados = apiJson.Recomendados
  return TonyPizzaria_recomendados
};

const getListaFavoritas = function () {
  const TonyPizzaria_favoritas = apiJson.favoritas
  return TonyPizzaria_favoritas
};

const getListaCategorias = function () {
  const TonyPizzaria_categorias = apiJson.categorias
  return TonyPizzaria_categorias
};

const getAPI = function () {
  const TonyPizzaria = []
  TonyPizzaria.push(apiJson);
  return TonyPizzaria;
};


// Chamada da função
console.log(getListaFavoritas());

module.exports = {
  getAPI,
  getListaBebidas,
  getListaCadastros,
  getListaCategorias,
  getListaFavoritas,
  getListaPizzas,
  getListaRecomendados
}


  