const express=require("express");
const mongoose=require('mongoose');
const User=require("../model/userScheema");


const router=express.Router();
router.post("/", async (req, res) => {
    // console.log(req.body)
    const { name, email, age, profession } = req.body;
    try {
        const userAdded = await User.create({
            name: name,
            email: email,
            age: age,
            profession: profession
        });
        res.status(201).json(userAdded)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})
router.get("/",async(req,res)=>{
    try {
        const showAll=await User.find();
        res.status(200).json(showAll)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})
router.get("/:id",async(req,res)=>{
    const{id}=req.params;
    try {
        const singleUser=await User.findById({_id:id})
        res.status(200).json(singleUser);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})
router.delete("/:id",async(req,res)=>{
    const {id}=req.params;
    try {
        const deleteUser=await User.findByIdAndDelete({_id:id});
        res.status(200).json(deleteUser)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})
router.patch("/:id",async(req,res)=>{
    const {id}=req.params;
    const {name,email,age,profession}=req.body;
    try {
        const updateUser=await User.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json(updateUser);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
})

module.exports=router;