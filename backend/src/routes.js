const express = require('express');
const OngController = require('./controllers/OngController');
const incidentController = require('./controllers/incidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');



const routes = express.Router();

routes.post('/sessions',SessionController.create); //Login

routes.get('/ongs', OngController.index); //Listar ong
routes.post('/ongs', OngController.create); //Criar ong

routes.get('/profile', ProfileController.index); //Lista de casos

routes.get('/incidents', incidentController.index); //Buscar incidents
routes.post('/incidents', incidentController.create); //Criar incidents
routes.delete('/incidents/:id', incidentController.delete); //Deletar incidents

module.exports = routes;