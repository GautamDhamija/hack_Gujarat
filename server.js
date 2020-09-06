const express = require("express")
const app = express()
const db = require('./config/db')
const cors =require('cors')
app.use(express.json({ extended: false }))

app.use(express.json())
app.use(cors()) 
//Routes
app.use("/api/users", require('./Routes/users'))
app.use("/api/consultants", require('./Routes/consultants'))
app.use("/api/userPostConfirmation", require('./Routes/userPostConfirmation'))
app.use("/api/consultantPostConfirmation", require('./Routes/consultantPostConfirmation'))
app.use("/api/userAuth", require('./Routes/userAuth'))
app.use("/api/consultantAuth", require('./Routes/consultantAuth'))
app.use("/make/request/", require('./Routes/requesthandle'))

app.use("/api/specific/",require("./Routes/Specific"))
//Home page
db()
app.get("/", (req, res) => {
    res.send("Home")
})
//server
app.listen(process.env.PORT || 5000, () => {
    console.log("server up at 5000");
})