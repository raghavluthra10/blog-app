import connectMongodb from "@/lib/mongodb";

export default async function handler(req, res) {
  const db = await connectMongodb();
  console.log("db =>", db);
  res.status(200).json({ name: "John Doe" });
}
