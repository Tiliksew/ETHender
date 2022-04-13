import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import route from "./routes/posts.js";
import userRoute from "./routes/users.js";
const app=express()
app.use(cors())
app.use(bodyParser.json({limit:"30mb",extended:"true"}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:"true"}))
const CONNECTIONI_URL='mongodb+srv://tiliksewmulueta:tiliksewmulueta@cluster0.zn5cq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const port=process.env.port || 5001
mongoose.connect(CONNECTIONI_URL,{useNewUrlParser: true, useUnifiedTopology: true,})
.then(()=>app.listen(port,()=>console.log(`MongoDb conncted and listening successfully at port ${port}`)))
.catch((error)=>console.log(error.message))
// mongoose.set('useFindAndModify',false)c
app.use('/tenders',route)
app.use('/',userRoute)