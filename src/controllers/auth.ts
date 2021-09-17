import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { admins } from '../data/admins';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['token'] as string;
    if(token){
        try {
            const decoded = jwt.verify(token, 'abc123');
            next();
        }
        catch(e){
            res.status(401).send({msg: 'Not authenticated'});
        }        
    }
    else {
        res.status(401).send({msg: 'Not authenticated'});
    }
};

export const login = (req: Request, res: Response) => {
    const { username, password } = req.body;
    const matchingAdmin = admins.find(u => u.username === username && u.password === password);
    if(matchingAdmin){
        const token = jwt.sign({username}, 'abc123');
        res.send({
            status: 'success',
            token
        });
        return;
    }else {
        res.status(401).send({
            status: 'error',
            msg: 'No user found'
        });
    }
};

