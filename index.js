const express = require("express")

let app = express()

app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.get('/', (req, res, next)=>{
  let data = {
    name: "Ironhacker",
    bootcamp: "IronHack WebDev"
  };

  res.render('index', data)
})

app.get('/home/:nom', (req, res, next)=>{
  console.log("Salut "+req.params.nom)
  res.render('index', {name: req.params.nom})
})

app.listen(3000, ()=>{
  console.log("Le serveur a démarré sur le port 3000")
})