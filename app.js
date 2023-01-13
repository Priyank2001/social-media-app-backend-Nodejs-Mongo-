import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv'
import userRoutes from './routes/api/users.js';

dotenv.config()
connectDB() 

const app = express();

app.get('/', (req, res) => res.send('Hello world!'));

app.use('/', userRoutes)
const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));