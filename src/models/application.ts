import mongoose, { Schema } from 'mongoose';

const applicationSchema = new Schema({
  company: String,
  salary: String,
  contract: String,
  role: String,
  techs: [String],
  vacation: String,
  healthInsurance: String,
  benefits: [String],
  link: String,
  notes: String,
  recruitingProcess: String,
  state: String,
  jobSearchId: {
    type: Schema.Types.ObjectId,
    ref: 'JobSearch',
    required: true,
  },
},
{ timestamps: true });

const Application = mongoose.model('Application', applicationSchema);

export { Application };
