import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("moviesDB");
  const movies = await db.collection("movies").find({}).toArray();

  return NextResponse.json(movies);
}
