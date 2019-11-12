export const verifyRole = (req, res, next) => {
    if(req.userFonction == 'Project Manager') {
        next();
    }
    else {
        console.log('Error verifyrole');
        res.status(403).end();
    }
}