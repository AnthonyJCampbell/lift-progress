const db = require('../config/db')

const registerUserModel = async (name, password) => {

    await db.getDb().db()
        .collection('users')
        .insertOne({
            name,
            password
        })

    const newUser = await loginUserModel(name)
    return newUser
}

const loginUserModel = async (name) => {
    const newUser = await db.getDb().db()
        .collection('users')
        .find({
            name: name
        }).toArray()

    return newUser
}

const getUserModel = async () => {
    const user = await db.getDb().db()
        .collection('users')
        .find({})
        .toArray()

    return user
}

const setWeightsModel = async (user) => {
    const weights = await db.getDb().db()
        .collection('users')
        .insertOne({
            "weights": {
                "bench": "100"
            }
        }, { "name": "Gavin" })
        // .toArray()

    return weights
}

const logWorkoutModel = async () => {
    return 1
}

module.exports = {

    registerUserModel,
    loginUserModel,
    getUserModel,
    setWeightsModel,
    logWorkoutModel
}