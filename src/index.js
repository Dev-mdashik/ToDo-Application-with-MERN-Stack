const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const {connectDB} = require('./config/db')


const mobileRouter = require('./routes/mobileRouter');
const authRouter = require('./routes/authRouter');

dotenv.config();
connectDB();

const PORT = 5555
const app = express();

// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// routes
// app.use('/api', postRoutes)
// app.use('/api', userRoutes)
// app.use('/api', mobileRoutes) 
app.use('/api', mobileRouter)
app.use('/api', authRouter)



app.listen(PORT, ()=> console.log(`Server started on PORT ${PORT}`))
