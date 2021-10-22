const express = require('express');
const app = express();
const port = 3000;

const pelis = [
    {
        nombre: "¿Y dónde están las rubias?",
        codigo:1,
        estreno:"23 de junio de 2004",
        genero:"comedia",
        director:"Keenen Ivory Wayans",
        espectadores:10000
    },
    {
        nombre: "Gladiador",
        codigo:2,
        estreno:"18 de mayo de 2000",
        genero:"accion",
        director:"Ridley Scott",
        espectadores:1000
    },
    {
        nombre: "Batman inicia",
        codigo:3,
        estreno:"16 de junio de 2005",
        genero:"accion",
        director:"Christopher Nolan",
        espectadores:100000
    },
    {
        nombre: "Pulp fiction",
        codigo:4,
        estreno:"16 de febrero de 1995",
        genero:"Drama",
        director:"Quentin Tarantino",
        espectadores:1000
    },
    {
        nombre: "Kill Bill",
        codigo:5,
        estreno:"27 de noviembre de 2003",
        genero:"accion",
        director:"Quentin Tarantino",
        espectadores:10000
    },
    {
        nombre: "Django",
        codigo:6,
        estreno:"31 de enero de 2013",
        genero:"western",
        director:"Quentin Tarantino",
        espectadores:1000
    },
    {
        nombre: "Matrix",
        codigo:7,
        estreno:"10 de junio de 1999",
        genero:"ciencia ficcion",
        director:"Lana Wachowski",
        espectadores:10000
    },
    {
        nombre: "Austin Powers",
        codigo:8,
        estreno:"21 de enero de 1999",
        genero:"comedia",
        director:"Jay Roach",
        espectadores:1000
    },
    {
        nombre: "300",
        codigo:9,
        estreno:"9 de marzo de 2007",
        genero:"accion",
        director:"Zack Snyder",
        espectadores:10000
    },
    {
        nombre: "Rocky",
        codigo:10,
        estreno:"13 de enero de 1977",
        genero:"deportes",
        director:"John G. Avildsen",
        espectadores:100
    }
]


app.get('/',function(req,res) {
    res.send(pelis);    
})

app.get('/pelis',(req,res)=>{
    res.send(pelis.sort((a,b)=>{
        return b.espectadores-a.espectadores;
    }));
})

app.get('/pelis/:codigo',(req,res)=> {
    res.send(pelis.find(element=>element.codigo === req.params.codigo));
})

app.listen(port, function(){
    console.log(`Your server is working on http://localhost:${port}`)
})