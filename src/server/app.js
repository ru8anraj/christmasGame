const express = require('express')
    , app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(express.static('./'));

module.exports = app;