import express, { json, urlencoded } from 'express'
const db = require("./db/index")
import AuthRouter from "./routes/auth"
const app = express()
app.use(urlencoded({ extended: false }))
app.use(json())
app.use("/auth", AuthRouter)
app.listen(process.env.PORT, () => {
    console.log(`App running in port ${process.env.PORT}`)
})
