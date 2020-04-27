const express = require('express');
const router = express.Router();
const authMiddle = require('../middleware/authMiddle');
const authController = require('../controllers/authController');

/*Register */
router.post('/register', authMiddle.validateRegistration, authController.register);

/**Login */
router.post('/login', authMiddle.validateLogin, authController.login);

module.exports = router;
 