import { Request, Response } from 'express';
import { users } from '../data/users';
import User, { IUser } from '../models/User';


export const getUsers = (req: Request, res: Response) => {
    User
    .find({        
    })
    // .select('name industry')
    .limit(5)    
    .populate('profile', 'email phone')
    .exec((err: any, users: IUser[]) => {
        if(err){
            console.log(err);
            res.status(500).send({msg: err});
            return;
        }
        if(users.length > 0){
            console.log(users[0].actor);
        }        
        res.json(users);
    });



    // User.find({}, 'name industry', {
    //     limit: 5
    // }, (err: any, users: IUser[]) => {
    //     if(err){
    //         res.status(500).send({msg: err});
    //         return;
    //     }
    //     res.json(users);
    // });    
};

export const getUser = (req: Request, res: Response) => {    
    const { userId } = req.params;
    User.findById(userId, (err: any, user: IUser) => {
        if(err){
            res.status(500).send({msg: err});
            return;
        }
        res.json(user);
    });
};

export const addUser = async (req: Request, res: Response) => {
    const {name, industry} = req.body;
    const doc = new User({
        name,
        industry
    });
    try{
        const user = await doc.save();
        res.send(user);
    }
    catch(e){
        res.status(500).send(e);
    }
    
};

