const express = require('express');
const UserController = require('../../controllers/user-controller');
const {AuthRequestValidator} = require('../../middlewares/index');

const router = express.Router();

router.post('/signup',
    AuthRequestValidator.validateUserAuth,
    UserController.createUser
);
router.post('/signin',
    AuthRequestValidator.validateUserAuth,
    UserController.signIn
);

router.get('/isAuthenticated',
    UserController.checkUserAuth
);

module.exports = router;