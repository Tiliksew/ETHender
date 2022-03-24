const home=(req,res)=>{
    res.send('<h1>This is home</h1>')
}
const open=(req,res)=>{
    res.send('<h1>Open route here</h1>')
}
const direct=(req,res)=>{
    res.send('<h1>direct route here</h1>')
}
const limited=(req,res)=>{
    res.send('<h1>limited route here</h1>')
}
export {home,open,direct,limited}