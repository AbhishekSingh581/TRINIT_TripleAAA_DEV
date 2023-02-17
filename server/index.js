import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import CarbonInsightDAO from "./api/dao/CarbonInsightDAO.js";
dotenv.config();
const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000;

MongoClient.connect(process.env.CarbonInsight_DB_URI)
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .then(async (client) => {
    await CarbonInsightDAO.injectDB(client);
    app.listen(port, () => {
      console.log("listening");
    });
  });
