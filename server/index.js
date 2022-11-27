import express from 'express';
import router from './routes/api.js';
import morgan from 'morgan';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan('tiny'));
app.use('/api', router);


app.listen(PORT, console.log(`port is running on ${PORT} port`));