import jwt from 'jsonwebtoken';

export const verify = (req, res, next) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err) {
            // console.log('Error verify');
        res.status(403).end();
        } else {
            console.log('verify');
            next();
        }
    })
}