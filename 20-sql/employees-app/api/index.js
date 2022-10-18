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
app.get('/:tableName', db.getTable)
app.get('/:tableName/:id', db.getTableById)
app.post('/:tableName', db.addTable)
app.put('/:tableName/:id', db.updateTable)
app.delete('/:tableName/:id', db.deleteTable)

// app.get('/employees', db.getAllEmployees)
// app.get('/cities', db.getAllCities)
app.listen(PORT,() => console.log('You finally made it here👏', PORT))