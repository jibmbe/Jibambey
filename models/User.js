const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        require: true,
        min:3,
        max:20,
        unique: true,
    },
    email:{
        type:String,
        require: true,
        max:50,
        unique: true,
    },
    password:{
        type:String,
        required: true,
        min: 6
    },
    profilePicture:{
        type:String,
        default:""
    },
    followers:{
        type:Array,
        default:[]
    },
    following:{
        type:Array,
        default:[]
    },
    isAdmin:{
        type:Boolean,
        default: false
    },
    desc:{
        type:String,
        max: 50
    },
    city:{
        type:String,
        max: 50
    },
    from:{
        type:String,
        max:50
    },
    comment:{
        type:String,
        required: true
    },
},
    {timestamps:true}

);

module.exports = mongoose.model("User", UserSchema);