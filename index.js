const path = require('path');
const express = require('express');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/404Controller');

const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs');
app.set('views', 'views');

const port = 8000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'))); //to serve the public folder

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// adding 404 error page 
app.use(errorController.pageNotFound);


app.listen(port, () => {
    console.log(`server run at ${port}`)
})

// module.exports = path.dirname(require.main.filename);