import mongoose from 'mongoose';

const recommendationSchema = new mongoose.Schema({
  email: String,
  data: Object,
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model('Recommendation', recommendationSchema);