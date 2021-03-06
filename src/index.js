const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const ___dirname = path.resolve();

// settings
app.set('port', process.env.PORT || 9000);
app.set('json spaces',2);

// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

// routes
app.use("/api/connect", require("./routes/connect"));
app.use("/api/load", require("./routes/load"));
app.use("/api/start", require("./routes/start"));



// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

app.use(express.static('public'));

app.use(express.static('images/*'));

app.use(express.static('public/photos'));


app.get('/', (req, res) => {
    res.sendFile(path.join(___dirname + '/public/index.html'));
});

app.get('/planner', (req, res) => {
    res.sendFile(path.join(___dirname + '/public/planner/flightPlanner.html'));
});

app.get('/history', (req, res) => {
    res.sendFile(path.join(___dirname + '/public/results/History.html'));
});

app.get('/results.json', (req, res) => {
    res.sendFile(path.join(___dirname + '/results.json'));
});

app.get('/jquery.js', (req, res) => {
    res.sendFile(path.join(___dirname + '/public/js/jquery.js'));
});


