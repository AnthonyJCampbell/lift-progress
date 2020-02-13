const services = require('../services')


/*
 * call other imported services, or same service but different functions here if you need to
*/


const postRegisterUser = async (req, res, next) => {
    const { name, password } = req.body
    try {
        const newUser = await services.registerUser(name, password)

        return res.status(201).json({
            status: 201,
            newUser
        })
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(error)
    }
}

const postLoginUser = async (req, res, next) => {
    const { name } = req.body
    try {
        const user = await services.loginUser(name)

        return res.status(200).json({
            status: 200,
            user
        })
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(error)
    }
}

const getGetUser = async (req, res, next) => {
    // const { name } = req.body 
    try {
        const users = await services.getUser()

        return res.status(200).json({
            status: 200,
            users
        })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

const patchSetWeights = async (req, res, next) => {
    // const { user, content } = req.body
    try {
        await services.setWeights(
            // user, content
        )

        res.sendStatus(200)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(error)
    }
}

const postLogWorkout = async (req, res, next) => {
    // const { user, content } = req.body
    try {
        await services.logWorkout(
            // user, content
        )

        res.sendStatus(200)
        // next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(error)
    }
}

module.exports = {
    postLoginUser,
    postRegisterUser,
    getGetUser,
    patchSetWeights,
    postLogWorkout
}