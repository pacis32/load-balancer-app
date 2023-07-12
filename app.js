const express=require('express');
const app= express();
const port= 4000;
const name='Paul Amani'
app.get('/',(req,res)=>{
    res.send(`<h1> load ballancer Demo App  </h1> <h4>Message:Success<h4> <p>Version: 1.0.0</p> by ${name}`)
});

app.listen(port,()=>{
    console.log(`Demo app is up and listening to port ${port} `)
});