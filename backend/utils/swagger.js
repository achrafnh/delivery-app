// utils/swagger.js
const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Delivery API",
      version: "1.0.0",
      description: "API documentation for Uber-like delivery system",
    },
    servers: [{ url: "http://localhost:3000/api" }],
  },
  apis: ["./routes/*.js"], // ← chemins vers tes fichiers d’API
};

const specs = swaggerJsDoc(options);
module.exports = specs;
