import mongoose from "mongoose";


const postSchema = mongoose.Schema({
    title:String,
    message:String,
    creator:String,
    tags:[String],
    selectedFile:String,
    LikeCount :{type:Number ,default :0},
    created_at:{type:Date,default: new Date()}
})
const postmessage = mongoose.model('PostMessage',postSchema)

export default postmessage;