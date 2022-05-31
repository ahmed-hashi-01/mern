import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import PostRouter from "./routes/posts.js"


const app = express()
app.use(bodyParser.json({limit:"30mb", extended :true}))
app.use(bodyParser.urlencoded({limit:"30mb", extended :true}))
app.use(cors())

app.use('/posts',PostRouter)
// mongodb
const CONNECTION_URL = "mongodb://127.0.0.1:27017/Memories"

 //port
 const PORT = process.env.port || 5000
 
 //connect mongodb
 mongoose.connect(CONNECTION_URL,{useNewUrlParser: true , useUnifiedTopology: true})
 .then(() => app.listen(PORT , ()=> console.log(`Server running on PORT: ${PORT}`)))
 .catch((error)=> console.log(error.message))

//  mongoose.set('useFindAndModify',false)