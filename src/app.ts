import express, { Application, NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { users } from './data/users';
import apiRouter from './routes';
import session, { SessionData } from 'express-session';
import { initializeModels } from './models';
require('dotenv').config()


declare module 'express-session' {
    interface SessionData {
        views: number;
        title: string;
    }
}

import { json } from 'body-parser';

const app: Application = express();
const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const mongoUrl = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(mongoUrl)
    .then(() => {
        console.log('db connected');
    });
initializeModels();

app.use(session({
    secret: 'my secret',
    cookie: {}
}));

app.use(json());  //req.body
app.set('view engine', 'ejs');
app.use(express.static('public', {
    extensions: ['html']
}));


app.use((req, res, next) => {
    console.log(req.url);    
    console.log()
    next();
});

app.get('/users', (req: Request, res: Response) => {  
    req.session.views = req.session.views ? req.session.views + 1: 1;   
    console.log(req.session.views);
    res.render('users', {
        title: 'MEAN',
        users,
        views: req.session.views
    });
});

app.use('/api', apiRouter);

app.get('/hello', (req: Request, res: Response) => {
    res.send('hello');
});

app.listen(3000, () => {
    console.log('listening on 3000');
});