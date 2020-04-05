const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.listen(process.env.PORT || 8081)


var games = require('./games.json')
//var test = [
//    { "text": "Game1", "value": 0},
//    { "text": "Game2", "value": 1},
//    { "text": "Game3", "value": 2},
//];


//-----------------------------------------------------------// Spielnamen
app.get('/names', (req, res) => {           
    var names = [];
    games.forEach(elem => {
        var curr = new Game(elem.title, elem.id)
        names.push(curr)
    })        
    res.send(names);
})

function Game(title, id){           //Konstruktor
    this.title = title;
    this.id = id;
}

//-----------------------------------------------------------// spiele gesamt
app.get('/games', (req, res) => {
    res.send(games);
  })


//-----------------------------------------------------------//
app.post('/new', (req, res) => {
    //res.send('got it');
    res.send(req.body);

});

