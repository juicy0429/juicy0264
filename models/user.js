const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

var schema = new Schema({
  name: {type: String, required: true, trim: true},
  email: {type: String, required: true, index: true, unique: true, trim: true},
  using: {type: String, required: true, index: true, unique: true, trim: true},
  password: {type: String},
  createdAt: {type: Date, default: Date.now},
  facebook: {id: String, token: String, photo: String}
 
}, {
  toJSON: { virtuals: true},
  toObject: {virtuals: true}
});
schema.methods.generateHash = function(password) {
  return bcrypt.hash(password, 10);
};
schema.methods.validatePassword = function(password_) {
  return bcrypt.compare(password, this.password);
};


var User = mongoose.model('User', schema);

module.exports = User;
