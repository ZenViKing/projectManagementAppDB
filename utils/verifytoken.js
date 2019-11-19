export const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined') {
      const bearer = bearerHeader.split(' ');
      const bearerToken = bearer[1];
      
      req.token = bearerToken;
      console.log('verifytoken');
      next();
    } else {
      // console.log('Error verifytoken');
      res.status(403).end();
    }
  
}