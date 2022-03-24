import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
const app=express()
app.use(bodyParser.json({limit:"30mb",extended:"true"}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:"true"}))
app.use(cors())
const CONNECTIONI_URL='mongodb+srv://tiliksewmulueta:tiliksewmulueta@cluster0.zn5cq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const port=process.env.port || 5000
mongoose.connect(CONNECTIONI_URL,{useNewUrlParser: true, useUnifiedTopology: true,})
.then(()=>app.listen(port,()=>console.log(`listening successfully at port ${port}`)))
.catch((error)=>console.log(error.message))
// mongoose.set('useFindAndModify',false)c