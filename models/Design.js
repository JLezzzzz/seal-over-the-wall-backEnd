// models/Design.js
import mongoose from "mongoose";

const DesignSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  tags: [{ type: String }],
  designUrl: { type: String, required: true }, // ✅ uploaded design URL
  productType: { type: String, enum: ['tshirt', 'bags', 'cups'], required: true },
  selectedColors: [{ type: String, enum: ['white', 'gray', 'black', 'blue'] }],
  price: { type: Number, default: 0 },
  isPublished: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

export const Design = mongoose.model("Design", DesignSchema);
