import express from 'express'
import bodyParser from 'body-parser'
import { amiiboRouter } from './routes/amiibo.route.js'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import cors from 'cors'

mongoose.set('useFindAndModify', false);

dotenv.config()

const port = process.env.PORT || 5050

const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))

app.use(express.json())

app.use(express.static('public'))

app.use('/amiibo', amiiboRouter)

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>')
})

const main = async () => {
    await mongoose.connect(`${process.env.MONGO_CONNECTION}`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
    })
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
}

main()