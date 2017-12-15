const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan')
const path = require('path')
const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(express.static('client'))

app.get('/',(req,res)=>{
	res.status(200).sendFile(path.join(__dirname,'/../template/index.html'))
})

app.all('*',(req,res)=>{
	res.status(404).send({message:"Not Found"})
})

app.listen(port,console.log("APP RUNNING"))