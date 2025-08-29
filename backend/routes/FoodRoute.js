import express from "express"
const router=express.Router()
import multer from "multer";
import {addFood,listfood, removeFood} from '../controllers/Controllers.js'
// import upload from './upload' 

//Image Storage System

const storage= multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>
    {
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const uploads=multer({storage:storage})

// router.route('/add').post(uploads.single('image'),addFood)
router.post('/add',uploads.single('image'),addFood)
router.get('/list',listfood)
router.post('/remove',removeFood)



export default router;