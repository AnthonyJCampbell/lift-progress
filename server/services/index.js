const models = require('../models')

/*
  * if you need to make calls to additional tables, data stores (Redis, for example), 
  * or call an external endpoint as part of creating the blogpost, add them to this service
*/

const registerUser = async (name, password) => {
    try {
        const newUser = await models.registerUserModel(name, password)
        return newUser
    } catch (e) {
        throw new Error(e.message)
    }
}

const loginUser = async (name) => {
    try {
        const user = await models.loginUserModel(name)
        return user
    } catch (e) {
        throw new Error(e.message)
    }
}

const getUser = async () => {
    try {
        const users = await models.getUserModel()
        return users
    } catch (e) {
        throw new Error(e.message)
    }
}

const setWeights = async () => {
    try {
        return await models.setWeightsModel()
    } catch (e) {
        throw new Error(e.message)
    }
}

const logWorkout = async () => {
    try {
        return await models.logWorkoutModel()
    } catch (e) {
        throw new Error(e.message)
    }
}

module.exports = {
    registerUser,
    loginUser,
    getUser,
    setWeights,
    logWorkout
}
