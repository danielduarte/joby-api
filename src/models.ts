import mongoose, { Schema } from 'mongoose';

const jobSearchSchema = new Schema({
  state: String,
  title: String,
},
{ timestamps: true });

const applicationSchema = new Schema({
  company: String,
  benefits: String,
  jobSearchId: {
    type: Schema.Types.ObjectId,
    ref: 'JobSearch',
    required: true,
  },
},
{ timestamps: true });

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
  },
},
{ timestamps: true });

const Application = mongoose.model('Application', applicationSchema);
const ApplicationUpdate = mongoose.model('ApplicationUpdate', applicationUpdateSchema);
const JobSearch = mongoose.model('JobSearch', jobSearchSchema);

export {
  Application,
  ApplicationUpdate,
  JobSearch
};
