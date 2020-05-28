//-IMPORT DEPENDENCIES 
require("dotenv").config(); 
const express = require("express"); 
const session = require("express-session"); 
const massive = require("massive"); 
const path = require('path'); 

//-IMPORT VARIABLES 
const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env; 
const {register, login, logout} = require("./controllers/authCtrl");
const {getDash, getCellar, createWine, editWine, deleteWine, addToCellar} = require("./controllers/wineCtrl"); 
const {email} = require("./controllers/mailerCtrl")

//-TOP LEVEL 
const app = express(); 
app.use(express.json()); 
app.use(express.static( `${__dirname}/../build` )); 
app.use(session({
    secret: SESSION_SECRET, 
    resave: false, 
    saveUninitialized: false, 
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 14
    }
}))

//-MASSIVE
massive({
    connectionString: CONNECTION_STRING, 
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set("db", db)
    console.log("connected to db")
}).catch(err => console.log(err)); 


//-ENDPOINTS
    //AUTHORIZATION
app.post("/auth/register", register); 
app.post("/auth/login", login); 
app.delete("/auth/logout", logout);

    //WINE 
//-GET
//DISPLAYS ALL WINES WITHIN DASHBOARD
app.get("/api/dash", getDash)

//DISPLAYS ALL WINES WITHIN USERS CELLAR
app.get("/api/cellar", getCellar)

//-POST
//CREATE WINE
app.post("/api/wine", createWine) 

//ADD WINE TO USER CELLAR
app.post(`/api/cellar/:wine_id`, addToCellar) 

//-PUT
//EDIT NOTE AND RATING OF WINE FROM WITHIN CELLAR
app.put(`/api/wine/:wine_id`, editWine)

//-DELETE
//DELETE WINE FROM CELLAR 
app.delete(`/api/wine/:wine_id`, deleteWine)

//-NODEMAILER
app.post("/api/email", email);

//- SSH 
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

//- SERVER LISTENING
app.listen(SERVER_PORT, console.log(`Drinking on port ${SERVER_PORT}, where we drink all day and party all night`));