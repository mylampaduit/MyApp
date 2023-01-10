const express = require('express');
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);
app.listen(3000);
app.get('/todos', async (req, res) => {
    try {
        const todos = await todoModel.find({});
        res.json(todos);
    } catch (e) {
        console.log(e);
    }
});
app.post('/todos/create', async (req, res) => {
    const { todo } = req.body;
    try {
        const newTodo = await todoModel.create({ 
        todo,
    });
    res.json(newTodo);
    } catch (e) {
        res.status(500).send();
    }
});

app.put('/todos/update/:id', (req, res) => {});
app.delete('/todos/delete/:id', (req, res) => {});
const connection=require('./connection.js')
const todoModel=require('./todoModel.js')