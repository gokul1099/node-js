import express, { json, urlencoded } from 'express'

const app = express()
app.use(urlencoded({ extended: false }))
app.use(json())

app.listen(process.env.PORT, () => {
    console.log(`App running in port ${process.env.PORT}`)
})
