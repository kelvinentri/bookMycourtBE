var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const connectDb=require('./config/db')
const cors = require('cors')
// require('dotenv').config // 
var app = express();

const dotenv = require('dotenv').config();;
if (dotenv.error) {
  throw dotenv.error;   
  
}
app.use(cors({
  origin:['https://bookmycourt-app.onrender.com','http://localhost:3000']
})) 



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');   
const authRouter =require('./routes/authRouter');
const adminRoute =require('./routes/adminRoute');
const paymentRoute =require('./routes/paymentRoute');
connectDb()
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter); 
app.use('/users', usersRouter); 
app.use('/auth', authRouter);
app.use('/admin',adminRoute)
app.use('/payment',paymentRoute)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404)); 
});

// error handler
app.use(function(err, req, res, next)  {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
