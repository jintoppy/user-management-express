import express, { Application, NextFunction, Request, Response } from 'express';

import { json } from 'body-parser';

const app: Application = express();

app.use(json());  //req.body

app.use(express.static('public'));

app.use((req, res, next) => {
    console.log(req.url);
    next();
});


app.get('/hello', (req: Request, res: Response) => {
    res.send('hello');
});

app.listen(3000, () => {
    console.log('listening on 3000');
});