'use strict'

const mongoose = require('mongoose')
const { Schema } = mongoose

const OrganizationSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, required: true },
    name: { type: Schema.Types.String, required: true },
    address: { type: Schema.Types.String, required: true },
    category: { type: Schema.Types.String, required: true },
    legal: { type: Schema.Types.String, required: true },
    website: Schema.Types.String,
    keyIssues: [{ type: Schema.Types.String }],
    description: { type: Schema.Types.String, required: true },
    donationDefaults: {
      type: Schema.Types.Number,
      validate: {
        validator: Number.isInteger,
        message: '{VALUE} is not an integer value',
      },
    },
    balance: {
      type: Schema.Types.Number,
      validate: {
        validator: Number.isInteger,
        message: '{VALUE} is not an integer value',
      },
    },
  },
  {
    versionKey: false,
    timestamps: true,
    collection: 'organizations',
  },
)

module.exports = mongoose.model('Organization', OrganizationSchema)
