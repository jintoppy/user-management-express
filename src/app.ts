import express, { Application, NextFunction, Request, Response } from 'express';

import { json } from 'body-parser';

const app: Application = express();

app.use(json());

app.get('/', (req: Request, res: Response) => {
    res.send('hello');
});

app.listen(3000, () => {
    console.log('listening on 3000');
});