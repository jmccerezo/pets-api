import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import swaggerUI from "swagger-ui-express";
import swaggerJSdoc from "swagger-jsdoc";
import petRoutes from "./pets/routes/pets.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT!;
const DATABASE_URL = process.env.DATABASE_URL!;

const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Pets API",
      version: "1.0.0",
      description: "Node Express TypeScript REST API",
    },
  },
  paths: {
    tags:"Pets"
  },
  apis: ["./src/pets/routes/*.ts", "./src/pets/routes/*.js"],
};

const options = { customSiteTitle: "Pets API - Swagger UI" };

app.use(cors());
app.use(express.json());
app.use("/pets", petRoutes);
app.use(
  "/",
  swaggerUI.serve,
  swaggerUI.setup(swaggerJSdoc(swaggerSpec), options)
);

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () =>
    console.log(`Server is running at http://localhost:${PORT}`)
  );
}

mongoose.Promise = Promise;
mongoose.connect(DATABASE_URL);
mongoose.connection.on("error", (error: Error) => console.log(error));

export default app;
