import express from 'express';
import {getRepository} from 'typeorm';
import Orphanage from './models/Orphanages';
import './database/connection';

const app = express();
app.use(express.json());


app.listen(3333);