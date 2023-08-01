const mongoose=require('mongoose');

// var schema=new mongoose.Schema({
//     name:{
//         type:String,
//         required:true
//     },
//     email:{
//         type:String,
//         required:true,
//         unique:true
//     },
//     gender:String,
//     status:String
// })
var Userschema=new mongoose.Schema({
    googleId:{
        type:String,
        required:true
    },
    displayName:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },  
    image:{
        type:String
    },
    createdAt:{
        type:Date,
        default : Date.now
    }
})
// const Userdb = mongoose.model('userdb',schema);
module.exports=mongoose.model('User',Userschema,'User');
// now line 20 to export the module
// module.exports=Userdb;