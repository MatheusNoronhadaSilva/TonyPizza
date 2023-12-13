


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use((request, response, next) =>{
    
    response.header('Access-Control-Allow-Origin', '*')
   
    response.header('Acesss-Control-Allow-Methods', 'GET')

  
    app.use(cors());

  
    next()
})


app.use(cors());


app.get('/pizzas', cors(), (req, res) => {

    let controlePizzas = require("./functions")
    const listaPizzas = controlePizzas.getListaPizzas();
    if (listaPizzas) {
        res.json(listaPizzas);
    } else {
        res.status(404).json({ erro: 'Nenhuma pizza encontrada' });
    }
});


app.get('/categorias', cors(), (req, res) => {

    let controleCategorias = require("./functions")
    const listaCategorias = controleCategorias.getListaCategorias();

    if (listaCategorias) {
        res.json(listaCategorias);
    } else {
        res.status(404).json({ erro: 'Nenhuma categoria encontrada' });
    }
});


app.get('/cadastros', cors(), (req, res) => {

    let controleCadastros = require("./functions")
    const listaCadastros = controleCadastros.getListaCadastros();

    if (listaCadastros) {
        res.json(listaCadastros);
    } else {
        res.status(404).json({ erro: 'Nenhum cadastro encontrado' });
    }
});

app.get('/bebidas', cors(), (req, res) => {

    let controleBebidas = require("./functions")
    const listaBebidas = controleBebidas.getListaBebidas();
    if (listaBebidas) {
        res.json(listaBebidas);
    } else {
        res.status(404).json({ erro: 'Nenhuma bebida encontrada' });
    }
});


app.get('/favoritas', cors(), (req, res) => {

    let controleFavoritas = require("./functions")
    const listaFavoritas = controleFavoritas.getListaFavoritas();
    if(listaFavoritas) {
        res.json(listaFavoritas)
    } else {
        res.status(404).json({ erro: 'Nenhuma pizza favorita encontrada'})
    }
});

app.get('/recomendados', cors(), (req, res) => {

    let controleRecomendados = require("./functions")
    const listaRecomendados = controleRecomendados.getListaRecomendados();
    if(listaRecomendados) {
        res.json(listaRecomendados)
    } else {
        res.status(404).json({ erro: 'Nenhuma pizza favorita encontrada'})
    }
});

app.get('/api', cors(), (req, res) => {

    let controleApi = require("./functions")
    const api = controleApi.getAPI();
    if (api) {
        res.json(api)
    } else {
        res.status(404).json({ erro: "Sem API"});
    }
});

const PORT = 3030;
app.listen(PORT, () => {
    console.log(`FOIII ${PORT}`);
});
