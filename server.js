var express = require('express')
var app = express();

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`JSON Server is running in ${port}`);
  });

