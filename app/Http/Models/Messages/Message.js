'use strict'

const mongoose = require('mongoose')
const { Schema } = mongoose

const MessageSchema = new Schema(
  {
    organizationId: { type: Schema.Types.ObjectId, unique: true, required: true },
    sender: {
      userId: { type: Schema.Types.ObjectId, unique: true, required: true },
    },
    recipient: {
      userId: { type: Schema.Types.ObjectId, unique: true, required: true },
    },
    message: { type: Schema.Types.String, required: true },
    messageType: { type: Schema.Types.String, required: true },
    messageStatus: { type: Schema.Types.String, required: true },
    deleted: {
      status: { type: Schema.Types.Boolean, required: true },
      deletedAt: { type: Schema.Types.Date, required: true },
    },
  },
  {
    versionKey: false,
    timestamps: true,
    collection: 'messages',
  },
)

module.exports = mongoose.model('Message', MessageSchema)
