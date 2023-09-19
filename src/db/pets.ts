import mongoose from "mongoose";

const PetSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    breed: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
  },
  { timestamps: true }
);

const PetModel = mongoose.model("Pet", PetSchema);

export default PetModel;
