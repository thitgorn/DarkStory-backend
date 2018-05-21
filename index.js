const axios = require('axios')
const questions = require('./data/question')
const express = require('express')
const app = express()
const PORT = 3000

function index(res) {
    res.send(x)
}

// app.get('/' , (req,res)=> index(res))

app.get('/',(req,res)=>{
    axios.post("/getanswer" , {
        method: "POST",
        url: "/getanswer",
        data: {
            test: "1234"
        }
    } ).then((reso) => {
        reso.data
    }).catch( (error) => {
        console.log(error.config)
    })
    res.send("done")
})

app.get('/questions', (req,res)=> {
    res.send(questions)
})



app.listen(PORT, () => console.log('Server is running on ' + PORT))