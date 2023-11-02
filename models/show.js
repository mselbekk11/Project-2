const mongoose = require('mongoose')
const Schema = mongoose.Schema

const showSchema = new Schema(
  {
    showImage: {
      type: String,
    },
    showName: {
      type: String,
    },
    showDate: {
      type: Date,
    },
    showVenue: {
      type: String,
    },
    showLocale: {
      type: String,
    },
    creatorId: {
      type: String,
    },
    // users: [{ type: mongoose.SchemaTypes.ObjectId, ref: User }],
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Show', showSchema)
