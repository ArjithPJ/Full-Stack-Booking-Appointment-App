const express=require('express');

const adminController=require('../controllers/admin');

const router=express.Router();

router.get('/', adminController.getForm);

router.post('/add-user', adminController.postAddUser);

router.get('/edit-user/:userId',  adminController.getEditUser);

router.post('/edit-user',  adminController.postEditUser);

router.post('/delete-user', adminController.postDeleteUser);

module.exports=router;