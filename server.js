// Require Libraries
const express = require('express');
const https = require('https');
const exphbs  = require('express-handlebars');
const port = 3000

// App Setup
const app = express();
app.use(express.static('public'));

// Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
