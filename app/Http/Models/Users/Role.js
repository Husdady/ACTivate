'use strict'

const mongoose = require('mongoose')
const { Schema } = mongoose

const RoleSchema = new Schema(
  {
    name: { type: Schema.Types.String, unique: true, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
    collection: 'roles',
  },
)

module.exports = mongoose.model('Role', RoleSchema)
