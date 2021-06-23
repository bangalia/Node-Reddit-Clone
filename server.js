require('./controllers/posts')(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set db
require('./data/reddit-db');
module.exports = app;

require('./controllers/comments.js')(app);
