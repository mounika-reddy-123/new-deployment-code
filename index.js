const express=require('express')
const app=express()

const quotes=[
    ["Genius is one percent inspiration and ninety-nine percent perspiration."],
    ["Go ahead, make my day."],
    ["He travels the fastest who travels alone."],
    ["Hell has no fury like a woman scorned."],
    ["What doesn't kill us makes us stronger."]
]

let randomIndex
app.get('/quotes',(req,res)=>{
    randomIndex=Math.floor(Math.random()*5)
    res.send(quotes[randomIndex])
})

app.get('/',(req,res)=>{
    res.send("Welcome to my Page!!")
})

app.listen(3000,()=>{
    console.log("Server starting at port:3000")
})