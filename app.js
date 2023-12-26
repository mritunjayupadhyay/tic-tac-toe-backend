import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { createServer } from 'http'
const app = express()
const httpServer = createServer(app)

const corsOptions = {
    origin: [process.env.CORS_ORIGIN, process.env.CORS_ORIGIN2],
    credentials: true,
}
// global middlewares
app.use(cors(corsOptions))

app.use(express.json({ limit: '16kb' }))
app.use(express.urlencoded({ extended: true, limit: '16kb' }))

export { httpServer }
