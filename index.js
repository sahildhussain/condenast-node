const express = require("express")
const keySet = require("./keys")

const app = express()


const PORT = process.env.PORT || 9000;

require('./routes/news')(app)
require('./routes/base')(app)

app.listen(PORT);
