import {Router} from "express";
import UserModel from "../Model/Model.js";
const router=Router();
router.get('/',(req,res)=>
{
    res.end('This is home page')
})
router.post('/',(req,res)=>
{
    res.send(req.body)
     const objUser= UserModel({
       name:req.body.name
    })
    objUser.save();
})
export default router;
