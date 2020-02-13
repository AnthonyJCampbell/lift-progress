const express = require('express')

const controller = require('../controllers')

const router = express.Router()

router.post('/register', 
    controller.postRegisterUser
)

router.post('/login', 
    controller.postLoginUser
)

router.get('/user', 
    controller.getGetUser
)

router.patch('/set-weights', 
    controller.patchSetWeights
)

router.post('/log', 
    controller.postLogWorkout
)


module.exports = router