import connectMongodb from "@/lib/mongodb";
import User from "@/models/userModel";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      await connectMongodb();

      const user = await User.find({});

      console.log("user", user);

      return res.status(200).json({ data: user });
    }
    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error!");
  }
}
