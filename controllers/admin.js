const User = require('../models/users');

exports.getForm = (req,res,next)=>{
    User.findAll()
    .then(users =>{
        res.render('admin/home', {
            users: users,
            pageTitle: 'Home',
            path:  '/admin/home',
            editing: 'false'
        });
    })
    .catch(err=>{
        console.log(err);
    });
};

exports.postAddUser = (req,res,next)=>{

    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.phone);
    const name= req.body.name;
    const email= req.body.email;
    const phone= req.body.phone;
    User.create({
        name: name,
        email: email,
        phone: phone
    })
    .then(newUser =>{
        console.log('New Appointment created', newUser);
        res.redirect('/');
    })
    .catch(error=>{
        console.log(error);
    });
};

exports.getEditUser = (req,res,next)=>{
    console.log("Hello World");
    console.log(req.params);
    const userID= req.params.userId;
    User.findByPk(userID)
    .then(user => {
        return User.findAll()
        .then(users =>{
            res.render('admin/edit-user', {
                users: users,
                pageTitle: 'Edit Appointment',
                path:  '/admin/edit-user',
                edit_user: user
            });
        });
    })
    .catch(err=>{
        console.log(err);
    });
};

exports.postEditUser= (req,res,next) =>{
    const userId = req.body.userId;
    const updatedName = req.body.name;
    const updatedEmail = req.body.email;
    const updatedPhone = req.body.phone;
    User.findByPk(userId)
    .then(user =>{
        user.name = updatedName;
        user.email = updatedEmail;
        user.phone= updatedPhone;
        return user.save();
    })
    .then(result =>{
        console.log('Updated Appointment');
        res.redirect('/');
    })
    .catch(err => console.log(err));
};

exports.postDeleteUser= (req, res, next) =>{
    console.log(req.body);
    const userId= req.body.userId;
    User.findByPk(userId)
    .then(user =>{
        return user.destroy();
    })
    .then(result =>{
        console.log('Appointment Deleted');
        res.redirect('/');
    })
    .catch(err=> console.log(err));
};