const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let studentSchema = new Schema({
  fname: {
    type: String
  },
  lname: {
    type: String
  },
  order: {
    type: String
  },
  quantity: {
    type: Number
  },
  address: {
    type: String
  },
  amount: {
    type: Number
  }
}, {
  collection: 'students'
})
module.exports = mongoose.model('Student', studentSchema)