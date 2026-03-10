import app from "./app.ts";
import connectDB from "./config/database.config.ts";
import { initializeKnowledgeBase } from "./services/rag.service.ts";

const PORT = process.env.PORT || 5000;

const startServer = async () => {

  try {

    // =========================
    // Connect MongoDB (Mongoose)
    // =========================
    await connectDB();


    // =========================
    // Initialize RAG Knowledge Base
    // =========================
    await initializeKnowledgeBase();


    // =========================
    // Start Express Server
    // =========================
    app.listen(PORT, () => {

      console.log("EduReach Server is running!");
      console.log(`URL: http://localhost:${PORT}`);

    });

  } catch (error) {

    console.error("Server failed to start:", error);
    process.exit(1);

  }

};

startServer();