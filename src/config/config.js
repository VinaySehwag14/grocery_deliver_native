import fastifySession from "@fastify/session";
import ConnectMongoDBSession from "connect-mongodb-session";
import "dotenv/config.js";

export const PORT = process.env.PORT || 3000;
export const COOKIE_PASSWORD = process.env.COOKIE_PASSWORD;

const MongoDBStore = ConnectMongoDBSession(fastifySession);

export const sessionStore = new MongoDBStore({
  uri: process.env.MONGO_URI,
  collection: "sessions",
});

sessionStore.on("error", (error) => {
  console.log("Session store error", error);
});

export const authenticate = async (email, password) => {
  //*Uncomment below code when create admin manully
  if (email && password) {
    if (email === "vinaysehwag14@gmail.com" && password === "123456789") {
      return Promise.resolve({ email: email, password: password });
    } else {
      return null;
    }
  }
  //*Uncomment below code when create admin automatically

  //   if (email && password) {
  //     const user = await Admin.findOne({ email: email });
  //     if (!user) {
  //       return null;
  //     }
  //     if (user.password === password) {
  //       return Promise.resolve({ email: email, password: password });
  //     } else {
  //       return null;
  //     }
  //   }
};
