import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CounterSchema = new Schema({
  name: { type: String, required: true, unique: true },
  sequence_value: { type: Number, default: 0 },
});
const Counter = mongoose.model("Counter", CounterSchema);
export default Counter;
