require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
const ctrl = require('./controllers/controller');
const actrl = require('./controllers/authController');

const app = express();

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db connected')
})

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}))

// Endpoints
app.get('/api/trucks', ctrl.getTrucks);
app.post('/api/trucks', ctrl.addTruck);
app.delete('/api/truck/:truck_id/:user_id', ctrl.deleteTruck);
app.get('/api/truckmin/:user_id', ctrl.getAdminTruck);
app.put('/api/truck/:truck_id/:user_id', ctrl.editTruck)
app.get('/api/addresses', ctrl.getAddresses)
app.get('/api/menu/:id', ctrl.getMenu)

//Auth Endpoints
app.post('/auth/register', actrl.register);
app.post('/auth/login', actrl.login);
app.post('/auth/logout', actrl.logout);

const port = SERVER_PORT;

app.listen(port, () => console.log(`server running ${port}`));