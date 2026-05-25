import express from 'express'
import dotenv from 'dotenv'
import routes from './routes/routes.js'
import connectDB from './db/connect.js'
import bodyParser from 'body-parser'
import path from 'path'



dotenv.config()

const app = express()

// middleware
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// routes
app.use('/', routes)

// frontend fallback
app.get('*', (req, res) => {
    res.sendFile(path.resolve('public/index.html'))
})

const PORT = process.env.PORT || 5000

const init = async () => {
    try {
        console.log("Mongo URI:", process.env.DB)

        await connectDB(process.env.DB)

        console.log('Connected to the database...')

        app.listen(PORT, () =>
            console.log(`Listening on port: ${PORT}`)
        )

    } catch (err) {
        console.error("Startup error:", err.message)
        process.exit(1)
    }
}

init()