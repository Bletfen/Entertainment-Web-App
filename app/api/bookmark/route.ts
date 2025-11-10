import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

export async function GET(req: Request) {
  try {
    const token = req.headers.get("cookie")?.split("token=")[1]?.split(";")[0];

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as any;
    const userId = decoded.userId;

    const client = await clientPromise;
    const db = client.db("moviesDB");
    const users = db.collection("users");

    const user = await users.findOne({ _id: new ObjectId(userId) });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ bookmarks: user.bookmarked || [] });
  } catch (error) {
    console.error("Get bookmarks error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const token = req.headers.get("cookie")?.split("token=")[1]?.split(";")[0];

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as any;
    const userId = decoded.userId;

    const { movieId, title, thumbnail, year, category, rating } =
      await req.json();

    if (!movieId) {
      return NextResponse.json({ error: "Movie ID required" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("moviesDB");
    const users = db.collection("users");

    const user = await users.findOne({ _id: new ObjectId(userId) });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const isBookmarked = user.bookmarked?.some(
      (item: any) => item.movieId === movieId
    );

    if (isBookmarked) {
      await users.updateOne({ _id: new ObjectId(userId) }, {
        $pull: { bookmarked: { movieId } },
      } as any);
      return NextResponse.json({
        message: "Bookmark removed",
        bookmarked: false,
      });
    } else {
      await users.updateOne(
        { _id: new ObjectId(userId) },
        {
          $push: {
            bookmarked: {
              movieId,
              title,
              thumbnail,
              year,
              category,
              rating,
              bookmarkedAt: new Date(),
            } as any,
          },
        }
      );
      return NextResponse.json({
        message: "Bookmark added",
        bookmarked: true,
      });
    }
  } catch (error) {
    console.error("Bookmark error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
