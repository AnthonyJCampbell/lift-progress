require('dotenv').config();

const server = require('./api/server.js');
const db = require('./config/db');

const port = process.env.PORT || 7000;

db.initDb((err, db) => {
    // err refers to the callback passed in db.js
    if (err) {
        console.log(err);
    } else {
        server.listen(port, () => console.log(
            `\n** Running on port ${port} **\n`
        ));
    }
})

// What info do we have to store?
// Email
// Password (hashed)
// Big 4 lifts (in kgs)
// OPTIONAL
// All previous workouts with timestamp, weights, reps, etc.
//      Whether or not they did the 1+

// What endpoints do we need?
// CRUD users + login / registration
//   Creating new user initially sets each all lifts to 0
// PUT request for lifts

// No updating user info just yet.

// Future
// Store weights in pounds as well
// Track session length
// Add name to user
// Add option to change password
