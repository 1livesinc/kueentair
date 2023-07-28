import mongoose, { Schema } from "mongoose";

const CommentSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    advertId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Comment", CommentSchema);
