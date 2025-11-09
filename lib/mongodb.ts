import { MongoClient, MongoClientOptions, Db } from "mongodb";

const uri = process.env.MONGODB_URI;
const options: MongoClientOptions = {};

if (!uri) throw new Error("Please add your Mongo URI to .env.local");

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

client = new MongoClient(uri, options);
clientPromise = client.connect();

export default clientPromise;
