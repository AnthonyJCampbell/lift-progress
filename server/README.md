
What info do we have to store?
Email
Password (hashed)
Big 4 lifts (in kgs)
OPTIONAL
All previous workouts with timestamp, weights, reps, etc.
     Whether or not they did the 1+

What endpoints do we need?
CRUD users + login / registration
  Creating new user initially sets each all lifts to 0
PUT request for lifts

No updating user info just yet.

Future
Store weights in pounds as well
Track session length
Add name to user
Add option to change password


data model = {
    user: {
        id: XXXXXXXXXXX,
        email: "",
        password: "HASH",
        signed_up_at: TIMESTAMP,
        weight: XXX,
        length: XXX,

        lifts: {
            bench: XXX,
            deadlift: XXX,
            squat: XXX,
            press: XXX,
        },

        restLength: XXX //seconds,
        numberOfDaysPerWeek: 4/5/6,
        
    }
}

