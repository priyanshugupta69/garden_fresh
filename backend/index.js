const express = require('express');
const passport = require("passport")
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const session = require('express-session');

var GoogleStrategy = require('passport-google-oauth20').Strategy;
const { createProxyMiddleware } = require('http-proxy-middleware');
app.use(bodyParser.urlencoded({ extended: true }));
const cors = require('cors');
mongoose.connect("mongodb://127.0.0.1:27017/GardenFesh", { useNewUrlParser: true });
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
})
const User = new mongoose.model("User", userSchema);
app.use(session({
  secret: '7861',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true,
    maxAge: 3000000 *60
  }
}));
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
app.post("/login", cors(), async (req, res) => {
  const test = req.body
  console.log(test)
  try{
    const data = await User.findOne({ 'email': test.email });
    console.log("data",data)
    if(data){
      if(data.password === test.password){
        res.send("login succesfull")
      }
      else{
        res.send("wrong password")
      }
    }
    else{
      console.log("user not found")
      res.redirect("http://localhost:3000/signup")
    }



  }
  catch (error) {
    console.log(error);
  }
 

})
passport.use(new GoogleStrategy({
  clientID: "525994195892-ujh7g873ot9o2ehit0qu0d3ibs39j8ld.apps.googleusercontent.com",
  clientSecret: "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",
  callbackURL: "http://localhost:3001/auth/google/home",
  passReqToCallback: true
},
function(req ,accessToken, refreshToken, profile, cb) {
  console.log(profile)
  cb(null , profile);

  
}
 
));

app.post("/signup", cors(), async (req, res) => {

  const test = req.body;
  try{
    const data = await User.findOne({ 'email': test.email });
    if(data){
      res.send("User already exits")

    }
    else{
      const user = new User(
        test
      )
      user.save()
      res.send("signup succesfull")
      
      
    }



  }
  catch (error) {
    console.log(error);
  }
  
})
app.get("/auth/google", 
passport.authenticate('google', { scope: ['profile'] }), 
);

app.get('/auth/google/home', 
  passport.authenticate('google' , { failureRedirect: 'http://localhost:3000/login' , 
  failureMessage: "Cannot login to Google, please try again later!" }),
  (req, res) => {
    res.redirect("http://localhost:3000/auth/google/home");
  }
  );
app.listen(3001, () => {
  console.log('Example app listening on port 3001!')
})