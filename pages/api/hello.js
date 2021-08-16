import { connectToDatabase } from "util/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();


  const data = await db.collection("testcol").find({}).limit(10).toArray();

  res.status(200).json(data);
}