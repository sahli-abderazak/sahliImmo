const { body, validationResult } = require('express-validator');

// with the express-validator module we can put conditions to the user and rendering to him to facilitate 
// the signin and signup steps and for more security for the website :

exports.signUpValidation = [
    body('name' ).isEmpty(),
    body('email'  , 'the email must be an email format ').isEmpty().isEmail(), 
    body('password' , 'the password must be contain at least 8 caracters').isEmpty().isEmail().isLength({min:8}),
    body('phoneNumber', 'phone number must contain only 8 numbers').isEmpty().isLength({min:8}), 
    body('address').isEmpty() ,
]


exports.signInValidation = [
    body('email'  , 'the email must be an email format ').isEmpty().isEmail(), 
    body('password' , 'the password must be contain at least 8 caracters').isEmpty().isEmail().isLength({min:8})
]



exports.isValid = async (req, res, next) => {
try {
    const errors = validationResult(req.body);
    if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
    }
    next()
} catch (error) {
    res.status(400).send({ msg : "something went wrong"})
    
}
}