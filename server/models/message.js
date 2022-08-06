const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    sid : String,
    to : String,
    from : String,
    text : String,
    status : String,
    direction : String,
    createdAt : String,
    updatedAt : String

})

module.exports = mongoose.model('message',messageSchema)

