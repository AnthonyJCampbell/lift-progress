const services = require('../services')


/*
 * call other imported services, or same service but different functions here if you need to
*/


const postRegisterUser = async (req, res, next) => {
    // const { user, content } = req.body
    try {
        await services.registerUser(
            // user, content
        )
        // other service call (or same service, different function can go here)
        // i.e. - await generateBlogpostPreview()
        res.sendStatus(200)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(error)
    }
}

const postLoginUser = async (req, res, next) => {
    // const { user, content } = req.body
    try {
        await services.loginUser(
            // user, content
        )

        res.sendStatus(200)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(error)
    }
}

const getGetUser = async (req, res, next) => {
    // const { user, content } = req.body
    try {
        await services.getUser(
            // user, content
        )

        res.sendStatus(200)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(error)
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
        next()
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