const mongoose = require('mongoose')
const Schema = mongoose.Schema

const showSchema = new Schema(
  {
    showSearch: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Show', showSchema)
