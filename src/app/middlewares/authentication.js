import { verify } from 'jsonwebtoken';

export function auth (req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    // decode token
    if (!token){
    	// if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    } else {
        // verifies secret key and checks Whether its Expired or not.
        verify(token, "SecretKey", function (err, decoded) {
            if (err) {
                return res.json({
                    success: false,
                    message: 'Failed to authenticate token.'
                });
            } else {
                // if everything is good, save to request for use in other routes
                decodedToken = decoded; 
                next();
            }
        });
    }
}