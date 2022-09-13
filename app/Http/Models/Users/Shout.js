'use strict'

const mongoose = require('mongoose')
const { Schema } = mongoose

const UserShoutSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, unique: true, required: true },
    userText: { type: Schema.Types.String, required: true },
    timePosted: { type: Schema.Types.Date, required: true },
    messageReport: { type: Schema.Types.Boolean, required: true },
  },
  {
    versionKey: false,
    timestamps: false,
    collection: 'users-shouts',
  },
)

module.exports = mongoose.model('UserShout', UserShoutSchema)
