const mongoose = require('mongoose');
const db = require('../config/db');


mongoose.connect(db.uri, { useNewUrlParser : true, useUnifiedTopology: true });

module.exports = mongoose;