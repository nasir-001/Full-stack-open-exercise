import express from 'express';
import cors from 'cors';
import diagnoseRouter from './routes/diagnoses';
import patientsRouter from './routes/patients';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = 3001;

app.get('/api/ping', (_req, res) => {
    console.log('someone pinged here');
    res.send('pong');
});

app.use('/api/diagnosis', diagnoseRouter);
app.use('/api/patients', patientsRouter);

app.get('/api/patients', (_req, res) => {
    console.log('someone pinged here');
    res.send('patients');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});