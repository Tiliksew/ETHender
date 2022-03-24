import express from "express";
const router=express.Router()
router.get('/',(req,res)=>{
    console.log('successfull run')
    res.send('<h1>This is home</h1>')
})
router.get('/open',(req,res)=>{
    console.log('successfull run')
    res.send('<h1>open tenders here</h1><a href="/tenders">back to home </a>')
})
router.get('/direct',(req,res)=>{
    console.log('successfull run')
    res.send('<h1>direct tenders here</h1><a href="/tenders">back to home </a>')
})
router.get('/limited',(req,res)=>{
    console.log('limited tenders here')
    res.send('<h1>The first routes</h1><a href="/tenders">back to home </a>')
})
export default router