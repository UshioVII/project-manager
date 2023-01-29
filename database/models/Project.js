const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    requiered: true,
    trim: true
  },
  description: {
    type: String,
    requiered: true,
    trim: true,
  },
  dataExpire: {
    type: Date,
    default: Data.now(),
  },
  client: {
    type: String,
    requiered: true,
    trim: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  collaborators:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    }
  ]
}, {
  timestamps: true
});


module.exports = mongoose.model('Project', projectSchema)