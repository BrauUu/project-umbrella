const express = require('express');
var cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json());
app.listen(3333);

require("./routes/umbrellaRoutes")(app);