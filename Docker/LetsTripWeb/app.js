//Imports
const express = require('express')
var bodyParser = require('body-parser');
apiRouter = require('./apiRouter').router;

//Initiate server
const app = express()
/** Déclaration du router */
const routes = require('./routers/router.js')

/** Déclaration des dossiers pour pouvoir envoyer leurs contenues au client */
app.use(express.static(__dirname + '/views'));
app.use('/css', express.static('views/css'));
app.use('/images', express.static('views/images'));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

/** Initialisation du router */
//app.use('/', routes);

app.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send('<h1> coucou le serveur </h1>');
});

app.use('/api/', apiRouter);

/** Ouverture du server sur le port 2042,
 * c'est le port sur lequel le site va tourner. */
app.listen(3000, function () {
  console.log('Express listening on port 3000!')
})
