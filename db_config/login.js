const express = require('express')
const db = require('db.js')
const cors = require('cors')

const app = express();
const  PORT = 3000;
app.use(cors());
app.use(express.json())

//#region login table
app.get('/login/get', (req, res) => {
   const selectAll = 'SELECT `email`, `phone_number`, `password` FROM `login` WHERE 1';

   db.query(selectAll, (err, rows) => {
       if (err) throw err;
       res.send(rows);
   });
});
