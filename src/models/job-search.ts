import mongoose, { Schema } from 'mongoose';

const jobSearchSchema = new Schema({
  title: String,
  state: String,
},
{ timestamps: true });

const JobSearch = mongoose.model('JobSearch', jobSearchSchema);

export { JobSearch };
