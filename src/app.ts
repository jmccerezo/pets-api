import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import swaggerUI from "swagger-ui-express";
import swaggerJSdoc from "swagger-jsdoc";
import petRoutes from "./pet/routes/pet.routes";

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
      description: "REST API using Node.js, Express, TypeScript and MongoDB",
    },
  },
  apis: ["./src/pet/routes/*.ts", "./src/pet/routes/*.js"],
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

mongoose
  .connect(DATABASE_URL)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server is running at http://localhost:${PORT}`)
    )
  )
  .catch((error: Error) => console.log(error));

export default app;
