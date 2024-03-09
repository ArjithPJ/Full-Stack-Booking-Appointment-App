const express=require('express');

const bodyParser=require('body-parser');

const sequelize=require('./util/database');
const User=require('./models/users');

const app=express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes=require('./routes/admin');


app.use(bodyParser.urlencoded({extended: false}));
app.use(adminRoutes);

sequelize.sync()
  .then(result => {
    console.log('Database synchronized');
  })
  .then(app.listen(3000))
  .catch(error => {
    console.error('Error syncing database:', error);
  });

