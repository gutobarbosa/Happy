import express from 'express';
import {getRepository} from 'typeorm';
import Orphanage from './models/Orphanages';
import './database/connection';

const app = express();
app.use(express.json());



app.post('/orphanages', async (request, response) => {
console.log(request.body);
  return response.json({message:'Hello world'}); 
});

app.listen(3333);