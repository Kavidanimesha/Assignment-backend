const express = require('express')
const router = express.Router()
const {getAllUsers,createUser, updateUSer,  DeleteUser } = require ('../controllers/usersController')

router.get('/',getAllUsers )

router.post('/', createUser)

router.put('/:id',updateUSer)

router.delete('/:id',DeleteUser)

module.exports = router