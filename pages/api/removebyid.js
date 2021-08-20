import { ObjectId } from "mongodb";
import { connectToDatabase } from "util/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  const data = req.query;
  const response = await db.collection("testcol2").deleteOne({"_id": ObjectId(data.id)})

  res.json(response);
}
