let express=require('express');

let bodyParser=require('body-parser');

let mongoose=require('mongoose');
let app=express();

let apiRoutes = require("./route/routes.js")

app.use(bodyParser.urlencoded({
    extended : true
}));


app.use(bodyParser.json());

const dbPath = 'mongodb://localhost:27017/EmployeeDB';
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(dbPath, options);

mongo.then(() => {
    console.log('connected');
}, error => {
    console.log(error, 'error');
});
var db=mongoose.connection;


if (!db)
console.log("Error connecting db");
else
console.log("DB Connected Successfully");

var port = process.env.PORT || 8083;

app.get('/', (req, res) => res.send('Welcome to Naukri'));

app.use('/api', apiRoutes)


app.listen(port, function() {
    console.log("Running Naukri on Port "+ port);
});
