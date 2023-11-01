const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Show = require('./show')

const userSchema = new Schema(
  {
    name: String,
    googleId: {
      type: String,
      required: true,
    },
    email: String,
    avatar: String,
    shows: [{ type: mongoose.SchemaTypes.ObjectId, ref: Show }],
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)
