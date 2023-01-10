const mongoose = require('mongoose');
const schema = new mongoose.Schema(
    {
        todo:  "String",
    },
    {
        timestamp: true }
);
const Todo = mongoose.model('Todo', schema);
module.exports = Todo;