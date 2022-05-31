import PostMessage from '../models/postMessage.js'
export const getPost = async (req,res)=>{
    try{
        const postmessage= await PostMessage.find()
        res.status(200).json(postmessage)
    }catch (error){
        res.status(404).json({message :error.message})
    }
}
export const createPost = async (req,res)=>{
    const post = req.body
    const newPost = PostMessage(post)
  try{
    await newPost.save()
    res.status(201).json(post)
    }catch (error){
        res.status(404).json({message:error.message})
    }
}