const express = require('express');
const userController = require('../Controller/userController');

const router = express.Router();

router.post('/update/:id',userController.update_user);
router.get('/user_info/:id',userController.user_info);

router.get('/helper5', userController.user_summary_helper5);
router.get('/helper6', userController.user_summary_helper6);

router.get('/send_mail/:id',userController.send_mail)

module.exports = router;