const express = require("express")
//express function and express module are two different things
const app = express()
const port = 2000

app.get('/', (req, res)=>{
    res.send('i am gonna show myself on browser using express()')
})

app.listen(port, ()=>
{
    console.log('listening to the port ${port}')
})