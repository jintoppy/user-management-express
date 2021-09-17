import express, { Application, NextFunction, Request, Response } from 'express';
import { users } from './data/users';
import apiRouter from './routes';
import session, { SessionData } from 'express-session';

declare module 'express-session' {
    interface SessionData {
        views: number;
        title: string;
    }
}

import { json } from 'body-parser';

const app: Application = express();


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