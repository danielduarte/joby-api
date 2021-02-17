import mongoose, { Schema } from 'mongoose';

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

const ApplicationUpdate = mongoose.model('ApplicationUpdate', applicationUpdateSchema);

export { ApplicationUpdate };
