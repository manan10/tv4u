const mongoose = require('mongoose');

// DB config
const db = "mongodb+srv://manan:manan@tv4u.rom1xod.mongodb.net/?retryWrites=true&w=majority";

// Connect to MongoDB
const client = mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true} )
    .then(console.log('MongoDB Connected'))
    .catch(err => console.log(err));

module.exports = client;