import React from 'react'
const express = require('express');
const db = require('db.js')
const cors = require('cors')

const app = express();
const  PORT = 3000;
app.use(cors());
app.use(express.json())

// Route to get all posts
app.get("/api/get", (req,res)=>{
db.query("SELECT * FROM romero", (err,result)=>{
    if(err) {
    console.log(err)
    } 
res.send(result)
});   });


// Route for creating the post
app.post('/api/create', (req,res)=> {

const email = req.body.email;
const phoneNumber = req.body.phoneNumber;
const password = req.body.password;

db.query("INSERT INTO romero (email, phoneNumber, password) VALUES (?,?,?)",[email,phoneNumber,password], (err,result)=>{
   if(err) {
   console.log(err)
   } 
   console.log(result)
});   })

