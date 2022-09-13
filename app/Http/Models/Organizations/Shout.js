'use strict'

const mongoose = require('mongoose')
const { Schema } = mongoose

const OrganizationShoutSchema = new Schema(
  {
    organizationId: {
      type: Schema.Types.ObjectId,
      unique: true,
      required: true,
    },
    organizationText: { type: Schema.Types.String, required: true },
    timePosted: { type: Schema.Types.Date, required: true },
    messageReport: {
      type: Schema.Types.Number,
      required: true,
      validate: {
        validator: Number.isInteger,
        message: '{VALUE} is not an integer value',
      },
    },
  },
  {
    versionKey: false,
    timestamps: false,
    collection: 'organizations-shouts',
  },
)

module.exports = mongoose.model('OrganizationShout', OrganizationShoutSchema)
