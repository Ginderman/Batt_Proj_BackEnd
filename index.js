const express = require('express');
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors');

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))



// app.get('/', function (req, res) {
//     res.send('Hello World')
// })


app.post('/', function (req, res) {
    console.log(req.body)
    res.send('Hit Post Route')
})

app.post('/:MechID', function (req, res) {
    
    const { MechID } = req.params;
    console.log(MechID) 

    console.log(req.body);
    res.send('Hit Params Route');
})

app.listen(3050, () => {
    console.log("Listening on port 3050!");
})