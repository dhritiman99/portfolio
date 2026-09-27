import mongoose, { Schema } from "mongoose"

const formSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

export const Form =
  mongoose.models.Form || mongoose.model("Form", formSchema)