const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    hash_password: {
        type: String,
        require: true
    },

}, { timestamp: true })


UserSchema.virtual('password') 
    .set(function(password) {
    this.hash_password = bcrypt.hashSync(password,10);
});

// UserSchema.methods={
//     authenticate:function(password){
//         return bcrypt.compareSync(password,this.hash_password);
//     }
// }

const newUser = mongoose.model('user', UserSchema);
module.exports = newUser;