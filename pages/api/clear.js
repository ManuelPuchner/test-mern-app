import { connectToDatabase } from "util/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  
  const response = await db.collection("testcol2").deleteMany({})

  res.json(response);
}
