
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

