//const member1="bugDigger0"
const express = require("express");
const { appendFile } = require("fs");
const { DefaultDeserializer } = require("v8");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//console.log(member1)
app.get('/shop',(req,res)=>{
 let tickets =[] 
db.collection('shop')
.find ()
.sort({MatchNumber:1})
.foreach(shop=>tickets.push(shop))
.then(()=>{
    res.status(200).json(tickets)
})
.catch(()=>{
    res.status(500).json({error :'could not fetch the documents'})
})

})