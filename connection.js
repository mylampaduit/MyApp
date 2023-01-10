const mongoose = require('mongoose');
require('dotenv').config();
const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}
const uri = 'mongodb+srv://<username>:<password>@cluster0.0z0xw.mongodb.net/<dbname>?retryWrites=true&w=majority';
const connection= mongoose.connect(uri, connectionParams)
    .then(() => {
        console.log('Connected to database ')
    }
    )
    .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
    }
    );
module.exports = connection;
