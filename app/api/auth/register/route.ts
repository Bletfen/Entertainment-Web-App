import clientPromise from "@/lib/mongodb";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return new Response(JSON.stringify({ error: "Missing fields" }), {
      status: 400,
    });
  }

  const client = await clientPromise;
  const db = client.db("moviesDB");
  const users = db.collection("users");

  const existingUser = await users.findOne({ email });
  if (existingUser) {
    return new Response(JSON.stringify({ error: "User already exists" }), {
      status: 400,
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const result = await users.insertOne({
    email,
    password: hashedPassword,
  });

  return new Response(
    JSON.stringify({ message: "User created", userId: result.insertedId })
  );
}
