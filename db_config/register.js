const express = require('express')
const db = require('db.js')
const cors = require('cors')

const app = express();
const  PORT = 3000;
app.use(cors());
app.use(express.json())


//Insert into database
app.post('/login/insert', (req, res) => {
    const row = req.body.row; //Row to insert
    const insertRow = "INSERT INTO login (NULL, fullname, email, phone_number, address, password, confirm_password) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]','[value-5]','[value-6]','[value-7]')"; //Insert query

    db.query(insertRow, [row], (err, rows) => { //Insert row into database
        if (err) throw err;
        console.log('inserted: ' + row); //Print row inserted
    });

    console.log(row);
});

//Server port
app.listen(process.env.PORT || PORT, () => {
    console.log('Server started on port ' + PORT);
});
