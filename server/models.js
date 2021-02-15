const mongoose = require('mongoose');
const {Schema} = require('mongoose');


const jobSearchSchema = new Schema({
   title: String,
   state: String,
},
{timestamps: true});


const applicationSchema = new Schema({
   company: String,
   benefits: String,
   jobSearchId: {
      type: Schema.Types.ObjectId,
      ref: 'JobSearch',
      required: true,
   },
},
{timestamps: true});


const applicationUpdateSchema = new Schema({
   title: String,
   details: String,
   jobSearchId: {
     type: Schema.Types.ObjectId,
     ref: 'JobSearch',
     required: true,
   },
   appId: {
      type: Schema.Types.ObjectId,
      ref: 'Application',
      required: true,
   }
},
{timestamps: true});


module.exports = {
   Application: mongoose.model('Application', applicationSchema),
   ApplicationUpdate: mongoose.model('ApplicationUpdate', applicationUpdateSchema),
   JobSearch: mongoose.model('JobSearch', jobSearchSchema),
};
