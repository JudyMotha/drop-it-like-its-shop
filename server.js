// install dependencies; express, sequelize, dotenv
// require routes, sessions (for authentication)
const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const sequelize = require('./config/configuration');
// double check this plz
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001

const sess = {
    secret: 'International super spy.....SUPER SPYYYY',
    cookie: {},
    resave: false,
    saveUnintialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(routes);

sequelize.sync({force:false}).then(() => {
    app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
})