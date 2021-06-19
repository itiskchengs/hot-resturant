// Dependencies
const express = require('express');
const path = require('path');

// Sets up the Express App

const app = express();
let PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/assets'))

// Resturant list (data)

const reservation = [];
const waitingList = [];

//Getting the pages needed
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));
app.get('/reserve.html', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));
app.get('/tables.html', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));
app.get('/home.html', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));
app.get('/api/reservations', (req, res) => {
    res.status(200).send(reservation);
})
app.get('/api/waitlist', (req, res) => {
    res.status(200).send(waitingList);
})

app.post('/api/reservations', (req, res) => {
    const newPerson = req.body;
    res.send(reservation);
    
    if(reservation.length < 5){
        reservation.push(newPerson);
        console.log('added new person to reservation');
    }else{
        waitingList.push(newPerson);
        console.log('added new person to waitlist');
    }

    /*
    for(let i = 0; i < reservation.length; i++){
        if(reservation.length <= 5){
            reservation.push(newPerson);
            console.log('added new person to reservation');
        }else{
            waitingList.push(newPerson);
            console.log('added new person to waitlist');
        }
    }
    */
});

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));