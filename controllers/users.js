const router = require('express').Router()
const User = require('../models/users')


// GET retrieve all users
router.get('/' , async (req, res) =>{
    try {
        const users = await User.find()
        res.json(users)
        
    } catch (error) {
        console.log(error)
        res.json({ "message": "error retrieving users"})
    }

})

// GET retrieve users by username
router.get('/username/:username' , async (req, res) =>{
    const { username } = req.params
    try {
        const users = await User.find({ username })
        res.json(users)
        
    } catch (error) {
        console.log(error)
        res.json({ "message": "error retrieving users"})
    }

})

// GET retrieve users by id
router.get('/id/:id' , async (req, res) =>{
    const { id } = req.params
    try {
        const users = await User.findById(id)
        res.json(users)
        
    } catch (error) {
        console.log(error)
        res.json({ "message": "error retrieving users"})
    }

})


// POST create user
router.post('/', async (req, res) => {
    try {
        const createdUser = await new User(req.body).save()
        res.json(createdUser)
    } catch (error) {
        console.log(error)
        res.json({"message": "error creating user"})
    }
})

// DELETE  users by id
router.delete('/id/:id' , async (req, res) =>{
    const { id } = req.params
    try {
        const user = await User.findByIdAndDelete(id)
        if(!user) {
            res.status(404).json({ 'message': 'no user found'})
        }else{
            res.json({ 'message': 'user deleted'})
        }
        
    } catch (error) {
        console.log(error)
        res.json({ "message": "error retrieving users"})
    }

    

})

module.exports = router

