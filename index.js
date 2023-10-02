const express = require("express")
const app = express()

app.use(express.json())

const PORT = process.env.PORT | 3000

app.get("/", (request, response) => {
    response.send({"lmao" : 1})
})

app.listen(PORT, () => {
    console.log("Server started!")
})