import dotenv from "dotenv";
dotenv.config({
  path: ".env",
});

const NODE_ENV = process.env.NODE_ENV;

const PORT = process.env.PORT;

const MONGO_URI = process.env.MONGO_URI;

export { PORT, MONGO_URI, NODE_ENV };
