import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BranchSchema = new Schema({
  name: { type: String, required: true },

  location: {
    latitude: { type: Number },
    longitude: { type: Number },
  },

  address: { type: String },
  deliveryPartner: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DeliveryPartner",
    },
  ],
});

const Branch = mongoose.model("Branch", BranchSchema);
export default Branch;
