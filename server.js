const express = require("express")
const app = express()

app.set('view engine', 'ejs')

app.get("/", (req, res) =>{
    console.log("here")
    res.render('index', {text: 'this is from a render variable in server.js'})
//    res.download('server.js')
//    res.json({message: 'Error'})
})

app.listen(3000)

app.get('/users', (req, res) => {

})

app.get('/users/new')

console.log("Spare the soul that hopes in the dark, for it not knows the despair it craves.")

