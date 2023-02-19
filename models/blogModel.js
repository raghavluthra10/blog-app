import { Schema, model, models } from "mongoose";

const likeSchema = new Schema({
  userId: String,
  name: String,
  email: String,
});

const commentSchema = new Schema({
  userId: String,
  comment: String,
});

const blogSchema = new Schema(
  {
    deltaOne: { type: String, required: true },
    deltaTwo: { type: String, required: false },
    userId: { type: String, required: true },
    comments: [commentSchema],
    likes: [likeSchema],
  },
  { timestamps: true },
);

const Blog = models.blog || model("blog", blogSchema);

export default Blog;
