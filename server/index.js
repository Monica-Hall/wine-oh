//- IMPORT DEPENDENCIES 
require("dotenv").config(); 
const express = require("express"); 
const session = require("express-session"); 
const massive = require("massive"); 
const path = require('path'); 

//- IMPORT VARIABLES 
const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env; 
const {register, login, logout} = require("./controllers/authCtrl");
const {createWine, addWine, getWines, editNote, deleteWine} = require("./controllers/wineCtrl"); 

//- TOP LEVEL 
const app = express(); 
app.use(express.json()); 
app.use( express.static( `${__dirname}/../build` )); 
app.use(session({
    secret: SESSION_SECRET, 
    resave: false, 
    saveUninitialized: false, 
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 14
    }
}))

//- MASSIVE
massive({
    connectionString: CONNECTION_STRING, 
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set("db", db)
    // console.log("connected to db")
}).catch(err => console.log(err)); 


//- ENDPOINTS - AUTHORIZATION
app.post("/auth/register", register); 
app.post("/auth/login", login); 
app.delete("/auth/logout", logout);

//- ENDPOINTS

// //- GET
//     // - GET ALL THE WINES FROM THE USERS BOOKMARK 
// app.get("/api/wines", getWines)


// // - POST
//     // - CREATE WINE 
// app.post("/api/create_wine", createWine) 

// 	//- ADD WINE TO BOOKMARK
// app.post("api/add_wine", addWine) 


// //- PUT
// 	// - EDIT THE NOTE ON THE WINE FROM THE USERS BOOKMARK 
// app.put("/api/note/:cellar_id", editNote)


// //- DELETE
// 	// - DELETE WINE FROM BOOKMARK 
// app.delete("/api/wine/:cellar_id", deleteWine)


//- SSH 
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

//- SERVER LISTENING
app.listen(SERVER_PORT, console.log(`Listening on port ${SERVER_PORT}, where all our dreams come true`));