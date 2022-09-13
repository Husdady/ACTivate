'use strict'

const mongoose = require('mongoose')
const { Schema } = mongoose

const DonationSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, unique: true, required: true },
    organizationId: {
      type: Schema.Types.ObjectId,
      unique: true,
      required: true,
    },
    bankId: { type: Schema.Types.ObjectId, unique: true, required: true },
    creditId: { type: Schema.Types.ObjectId, unique: true, required: true },
    amount: {
      type: Schema.Types.Number,
      required: true,
      validate: {
        validator: Number.isInteger,
        message: '{VALUE} is not an integer value',
      },
    },
    fullname: { type: Schema.Types.String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
    collection: 'donations',
  },
)

module.exports = mongoose.model('Donation', DonationSchema)
