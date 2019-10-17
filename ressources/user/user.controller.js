import { User } from './user.model';

export const createUser = async (req,res)=>{
    try {
        const user = await User.create({...req.body});
        res.status(201).json({Users : user});
    } catch(err) {
        console.error(err);
        res.status(400).end();
    }
}

export const list = async (req,res)=>{
    try {
        const users = await User.find();
        if(!movies) return res.status(400).end();
        res.status(200).json({Users : users});
    } catch(err) {
        console.error(err);
        res.status(400).end();
    }
}