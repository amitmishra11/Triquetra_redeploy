const User=require('../model/model');
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')

module.exports=function(passport){
    passport.use(new GoogleStrategy({
        clientID:process.env.GOOGLE_CLIENT_ID,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        callbackURL:'http://localhost:3000/auth/google/callback',
        scope: ['profile']
    },
    async(accessToken,refreshToken,profile,done)=>{
        // console.log(profile)
        const newUser = {
            googleId: profile.id,
            displayName: profile.displayName,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            image: profile.photos[0].value,
          }
          try {
            let user = await User.findOne({ googleId: profile.id })
  
            if (user) {
              done(null, user)
            } else {
              user = await User.create(newUser)
              done(null, user)
            }
          } catch (err) {
            console.error(err)
          }

    }
    ))
    passport.serializeUser((user, done) => {
        done(null, user.id)
      })
          
      passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => done(err, user))
      })

}

// Create and save new user
// validate the request first

// exports.create=(req,res)=>{if(!req.body){
//     res.status(400).send({message:"Content cant be empty"});
//     return;
// }
// new user

// const user=new Userdb({
//     name:req.body.name,
//     email:req.body.email,
//     gender:req.body.gender,
//     status:req.body.status
// })

// // Save user in database
// user
//     .save(user)
//     .then(data=>{
//         res.send(data)
//     })
//     .catch(err=>{
//         res.status(500).send({
//             message:err.message||"some error"
//         });
//     });

// }


















//Retrive and return all users
// exports.find=(req,res)=>{
//     Userdb.find()
//     .then(user=>{ res.send(user)})
//     .catch(err=>{res.status(500).send({ message:err.message||"some error"});});
// }

//Update a new user 
// exports.update=(req,res)=>{
    
// }

// delete user
// exports.delete=(req,res)=>{
    
// }