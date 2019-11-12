import { User } from './user.model';
import jwt from 'jsonwebtoken';

export const createUser = async (req,res)=>{
    try {
        let user;
        if(user) {
            console.log('That user is already exist.');
            return res.status(400).end();
        }
        else {
            var newUser = new User();
            newUser.lastname = req.body.lastname;
            newUser.firstname = req.body.firstname;
            newUser.email = req.body.email;
            newUser.fonction = req.body.fonction;
            newUser.password = newUser.generateHash(req.body.password);
        }
    } catch(err) {
        console.error(err);
        res.status(400).end();
    }
    try {
        const user = await User.create(newUser);
        res.status(201).json({Users : user});
    } catch(err) {
        console.error(err);
        res.status(400).end();
    }
}

export const list = async (req,res)=>{
    try {
        const users = await User.find();
        if(!users) return res.status(400).end();
        res.status(200).json(users);
    } catch(err) {
        console.error(err);
        res.status(400).end();
    }
}

export const getOne = async (req, res) => {
    try {
        const user = await User.findOne({_id:req.params.id});
        if(!user) return res.status(400).end();
        res.status(200).json({Users : user});
    } catch(err) {
        console.error(err);
        res.status(400).end();
    }
}

export const updateOne = async (req, res) => {
    try {
        const updatedUser = await User.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
        );
        if(!updatedUser) return res.status(400).end();
        res.status(200).json({Users : updatedUser});
    } catch(err) {
        console.error(err);
        res.status(400).end();
    }
}

export const deleteOne = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete({_id:req.params.id});
        if(!deletedUser) return res.status(400).end();
        res.status(200).json(deletedUser);
    } catch(err) {
        console.error(err);
        res.status(400).end();
    }
}

export const login = async (req,res)=>{
    try {
        const user = await User.findOne({email:req.body.email});
        if(user) {
            if(user.validPassword(req.body.password)) {
                jwt.sign({user}, 'secretkey', { expiresIn: '1h' }, (err, token) => {
                    if(err) {
                        res.status(403).end();
                    } else {
                        res.json({
                            token,
                            currentUser : user.email,
                            userFonction : user.fonction
                        });
                    }
                });
            }
        } 
    } catch(err) {
        console.error(err);
        res.status(400).end();
    }
}