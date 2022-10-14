import express from 'express';
import * as db from './queries.js';
const app = express();
const PORT = 3030;
app.use(express.json());

app.get('/', function (req, res){
    res.send('Hello World')
})
app.get('/Pokemon', function(req, res){
    res.send('💦Blastoise!!💦');
})
app.get('/employees', db.getAllEmployees)
app.get('/cities', db.getAllCities)
app.get('/salaried-employees', db.getAllSalariedEmployees)
app.get('/hourly-employees', db.getAllHourlyEmployees)
app.listen(PORT,() => console.log('You finally made it here👏', PORT))