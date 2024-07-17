const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const {DatabaseClient} = require('./dababaseConnect')
const {MechDataBaseClient} = require ('./MechDatabaseConn.js')
const { stockMechsList } = require ('./3025MechsList.js')

const app = express()



app.use(cors( {credentials: true, origin: 'http://localhost:5173'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({
    name: 'TestCookie',
    secret: "to-be-changed",
    resave: false,
    saveUninitialized: true,
    cookie : {
            
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000, // 1 day
            
    }
    
}));




function checkCookie (req,res,next){
    console.log('CheckCookie Middleware!');
    console.log('Session ID:', req.sessionID);
    console.log('Session:', req.session);
    console.log(req.session.user);
    next();
}



app.post('/', function (req, res) {
    console.log(req.body)
    res.send('Hit Post Route')
})

app.get('/login' , async function (req, res) {    //REMOVED MIDDLEWARE TO TEST OUT DB CONNECT
   //const data = await dbConnect();
   //console.log(data);
    res.send(data)
})

app.get('/stockMechList', function (req, res) {
    //console.log(stockMechsList)
    res.send(stockMechsList)
})

app.post('/:MechID', async function (req, res) {
    const { MechID } = req.params;
    const {Username, Password} = req.body;

    req.session.user = 'TestUser';
    const newUser = new DatabaseClient('mongodb://localhost:27017' ,'Batt_Proj_Acc' , 'Users')
    // await newUser.addToDB(req.body)
    //     .then( result => {
    //         res.send(result)
    //         }   
    //     )
     await newUser.UpdateInDB('Username', Username, req.body)
        .then( result => {
            res.send(result)
            }   
        )
    // await newUser.FindInDB(Username, 'Username')
    // .then( result => {
    //     res.send(result)
    //     }   
    // )
    // await newUser.removeFromDB(req.body)
    //     .then( result => {
    //         res.send(result)
    //         }   
    //     )
    //res.send('Hit Params Route, entered into DB and cookie set');
})



app.listen(3050, () => {
    console.log("Listening on port 3050!");
})