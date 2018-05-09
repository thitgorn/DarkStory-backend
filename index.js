const express = require('express')
const app = express()
const PORT = 3000

function index(res) {
    res.send("Helloworld")
}

app.get('/' , (req, res) => index(res))

app.listen(PORT, () => console.log('Server is running on ' + PORT))