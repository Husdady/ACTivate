'use strict'

const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema(
  {
    roleId: { type: Schema.Types.ObjectId, unique: true, required: true },
    imageField: { type: Schema.Types.ObjectId, required: true },
    name: { type: Schema.Types.String, required: true },
    password: { type: Schema.Types.String, required: true },
    email: { type: Schema.Types.String, required: true },
    fullname: { type: Schema.Types.String, required: true },
    dateOfBirth: Schema.Types.String,
    address: Schema.Types.String,
    city: Schema.Types.String,
    country: Schema.Types.String,
    facebook: Schema.Types.String,
    google: Schema.Types.String,
    companyName: Schema.Types.String,
    companyAddress: Schema.Types.String,
    socialMediaAccount: Schema.Types.String,
    about: Schema.Types.String,
    displayName: Schema.Types.String,
    keyIssues: [{ type: Schema.Types.String }],
    pinned: Schema.Types.String,
    followers: {
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
    collection: 'users',
  },
)

module.exports = mongoose.model('User', UserSchema)
