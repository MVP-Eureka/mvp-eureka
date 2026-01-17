import express, { json } from 'express';
import cors from 'cors';
import "dotenv/config"
import routes from './routes.js';
import mongoose from './database/db.js';
import cookieParser from "cookie-parser";

const PORT = process.env.PORT; 
const app = express();

app.use(json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(cookieParser());

app.use('/api', routes);

app.get('/', (req,res) => {
    res.send('Servidor funcionando');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
});