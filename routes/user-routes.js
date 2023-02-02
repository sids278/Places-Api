const express=require('express')
const userControllers=require('../controllers/users')
const router=express.Router();



router.get('/',userControllers.getUsers)

router.post('/signup',userControllers.signup)


module.exports=router