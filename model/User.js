import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    userid:{type:String},
    username:{type:String,required:true},
    password:{type:String,required:true},
    followers:{type:Array,required:false},
    following:{type:Array,required:false}
})

const User = mongoose.model('User', UserSchema)

export default User