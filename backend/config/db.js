require('dotenv/config');

const db = {
    uri : `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@sandbox.7kbv8.mongodb.net/umbrella?retryWrites=true&w=majority`
};

module.exports = db;