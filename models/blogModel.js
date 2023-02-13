import { Schema, model, models } from "mongoose";

const blogSchema = new Schema(
  {
    deltaOne: { type: String, required: true },
    deltaTwo: { type: String, required: false },
    userId: { type: String, required: true },
    comments: [
      {
        userId: String,
        comment: String,
      },
    ],
    likes: [String],
  },
  { timestamps: true },
);

const Blog = models.blog || model("blog", blogSchema);

export default Blog;
