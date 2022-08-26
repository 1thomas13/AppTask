import express from 'express'
import userRoutes from './routes/auth'
import projectRoutes from './routes/project'
import taskRouter from './routes/task'

import dotenv from 'dotenv'
dotenv.config()

const app = express()

const PORT = 3000

app.use(express.json())

app.use('/auth', userRoutes)
app.use('/project', projectRoutes)
app.use('/task', taskRouter)

app.get('/', (_, res) =>{ res.json('OK') })



app.listen(PORT, () =>{
    console.log(`listening on port: ${PORT}`)
})
