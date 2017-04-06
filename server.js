require("dotenv").config();

const path = require("path")
,	express = require("express")
,	app = express()
,	PORT = process.env.PORT || 3000
,	morgan = require("morgan")
, bodyParser = require("body-parser")
, mg = require("mongoose")
,	db = require("./config/db")
, mongo = require("mongodb");

app
	.use(morgan("dev"))
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({ extended: true }))
	.use(express.static(__dirname + ""));
	
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

mg.connect(db.url, e => e ? console.log("err: ", e) : console.log("db connected"));

app.listen(PORT, () => console.log(`Now serving on ${PORT}`));

exports = module.exports = app;