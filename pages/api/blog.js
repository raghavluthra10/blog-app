import connectMongodb from "@/lib/mongodb";
import Blog from "@/models/blogModel";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      await connectMongodb();

      const blog = await Blog.find({});

      console.log("blog", blog);

      return res.status(200).json({ data: blog });
    }
    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error!");
  }
}
