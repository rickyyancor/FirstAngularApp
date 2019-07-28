var port = process.env.PORT || 4080;
var express = require('express');
var bodyParser = require('body-parser')

var app = express();
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var server = app.listen(port);
console.log('Iniciando server')
// POST method route
var users=[
  {user:'noel',role:'Admin'},
  {user:'oscar',role:'Guest'}
];

app.get('/', function (req, res) {
  existe={status:'fail'}
  users.forEach(user=>{
    console.log(user)
    if(req.query.user==user.user)
    {
      existe.status=user.role;
    }
  })
  res.json(existe)

  console.log("Se han solicitado login usuario \n"+JSON.stringify(req.query));
});
