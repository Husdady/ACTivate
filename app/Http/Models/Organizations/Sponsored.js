'use strict'

const mongoose = require('mongoose')
const { Schema } = mongoose

const SponsoredSchema = new Schema(
  {
    organizationId: {
      type: Schema.Types.ObjectId,
      unique: true,
      required: true,
    },
    name: { type: Schema.Types.String, required: true },
    keyIssues: [{ type: Schema.Types.String }],
    description: { type: Schema.Types.String, required: true },
    donationDefaults: {
      type: Schema.Types.Number,
      required: true,
      validate: {
        validator: Number.isInteger,
        message: '{VALUE} is not an integer value',
      },
    },
    active: {
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
    timestamps: true,
    collection: 'soonsored',
  },
)

module.exports = mongoose.model('Sponsored', SponsoredSchema)
