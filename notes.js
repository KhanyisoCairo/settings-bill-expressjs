// //this is a GET route
// app.get('/hello', function(){

// });

// //this is a POST route
// app.post('/hello', function(){

// });




req.get('/urls/:param_one/url_part2/:param_two', function(req, res){
    //code goes here
});
//   var port = process.env.PORT || 8080;

// // routes will go here

// // start the server
// app.listen(port);
// console.log('Server started! At http://localhost:' + port);

// // app.get('/api/users', function(req, res) {
// //     var user_id = req.param('id');
// //     var token = req.param('token');
// //     var geo = req.param('geo');  
  
// //     res.send(user_id + ' ' + token + ' ' + geo);
// //   });


//   // parameter middleware that will run before the next routes
// app.param('name', function(req, res, next, name) {

//     // check if the user with that name exists
//     // do some validations
//     // add -dude to the name
//     var modified = name + '-dude';

//     // save name to the request
//     req.name = modified;

//     next();
// });

// // http://localhost:8080/api/users/chris
// app.get('/api/users/:name', function(req, res) {
//     // the user was found and is available in req.user
//     res.send('What is up ' + req.name + '!');
// });
// var bodyParser = require('body-parser');
// app.use(bodyParser.json()); // support json encoded bodies
// app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// // POST http://localhost:8080/api/users
// // parameters sent with 
// app.post('/api/users', function(req, res) {
//     var user_id = req.body.id;
//     var token = req.body.token;
//     var geo = req.body.geo;

//     res.send(user_id + ' ' + token + ' ' + geo);
// });

//req.body
app.post('/add_product', function(req, res){
    var formData = req.body;
    console.log(formData.product_name);
    res.render('product', {product_name :  formData.product_name});
   });
   //html view be like
//    <form action="/add_product" method="POST">
//     <label>Product name: <input type="text" name="product_name" ></label>
//     <input type="submit">
// </form>

// Set it up the same way you would connect-flash:

//   const flash = require('express-flash');
//   const session = require('express-session');
//   const express = require('express');
//   const app = express();

//   // initialise session middleware - flash-express depends on it
//   app.use(session({
//     secret : "<add a secret string here>",
//     resave: false,
//     saveUninitialized: true
//   }));

//   // initialise the flash middleware
//   app.use(flash());
// Use req.flash() in your middleware

//   app.get('/', function (req, res) {
//     req.flash('info', 'Welcome');
//     res.render('index', {
//       title: 'Home'
//     })
//   });
//   app.get('/addFlash', function (req, res) {
//     req.flash('info', 'Flash Message Added');
//     res.redirect('/');
//   });
// Access messages in Handlebars views use locals.messages:

//handlebars
// {{#if messages.info}}
// <div class="entry">
//     <h1> {{messages.info}}</h1>
// </div>
// {{/if}}