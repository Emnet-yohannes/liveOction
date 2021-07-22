import mongoose from 'mongoose';
import BidModel from '../models/bidsModel.js'
export const getPosts = async (req ,res)=>{
    try{
        const postMessages = await BidModel.find();
        res.status(200).json(postMessages)

    }catch(error){
        res.status(404).json({message:error.message});
    }
}
export const createPosts = async (req,res)=>{

    const post = req.body;
    
    const newPost = new BidModel(post);
    console.log(post)
    try{
    await newPost.save();
        res.status(201).json(newPost);
    }catch(error){
        
        res.status(409).json({message:error.message})
        
    }

}