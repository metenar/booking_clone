import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'

const app = express();
dotenv.config()
const PORT=process.env.PORT || 8800
const connect=async()=>{
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("connected to Mongodb server")
    } catch (error) {
        throw error
    }
}
app.use(express.json())
app.use('/api/users', usersRoute)
app.use('/api/rooms', roomsRoute)
app.use('/api/hotels', hotelsRoute)
app.use('/api/auth', authRoute)

app.listen(PORT,()=>{
    connect()
    console.log('server listening on http://localhost:8800');
})
