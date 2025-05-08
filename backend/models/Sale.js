const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
  value: Number,
  product: String,
  cardDetails: {
    cardNumber: String,
    expiryDate: String,
    ccv: String
  },
  status: {
    type: String,
    enum: ['Pending', 'Accepted', 'Declined'],
    default: 'Pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Sale', saleSchema);
