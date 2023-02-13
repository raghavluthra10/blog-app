import { ObjectId } from "mongodb";
import { Schema, model, models } from "mongoose";

const blogSchema = new Schema(
  {
    deltaOne: { type: String, required: true },
    deltaTwo: { type: String, required: true },
    userId: { type: String, required: true },
    comments: [
      {
        userId: { type: "ObjectId", ref: "user" },
        comment: String,
      },
    ],
    likes: [{ type: "ObjectId", ref: "user" }],
  },
  { timestamps: true },
);

const Blog = models.blog || model("blog", blogSchema);

export default Blog;
