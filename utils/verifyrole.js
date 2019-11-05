export const verifyRole = (req, res, next) => {
    if(req.body.fonction == 'Project Manager') {
        next();
    }
    else {
        res.status(403).end();
    }
}