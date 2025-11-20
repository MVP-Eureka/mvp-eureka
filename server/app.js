import express, { json } from 'express';
import cors from 'cors';
import "dotenv/config"
import routes from './routes.js';
import mongoose from './database/db.js';

const PORT = process.env.PORT; 
const app = express();

app.use(cors());
app.use(json());
app.use(cors({
    origin: process.env.CLIENT_URL
}));

app.use('/api', routes);

app.get('/', (req,res) => {
    res.send('Servidor funcionando');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
});