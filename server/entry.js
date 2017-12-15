const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan')
const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
	res.status(200).send({message:"Welcome"})
})

app.all('*',(req,res)=>{
	res.status(404).send({message:"Not Found"})
})

app.listen(port,console.log("APP RUNNING"))