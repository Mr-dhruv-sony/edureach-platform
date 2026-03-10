import path from "node:path";
import { fileURLToPath } from "node:url";
import { MongoClient } from "mongodb";

import {
  ChatGoogleGenerativeAI,
  GoogleGenerativeAIEmbeddings
} from "@langchain/google-genai";

import { MongoDBAtlasVectorSearch } from "@langchain/mongodb";

import { TextLoader } from "@langchain/classic/document_loaders/fs/text";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";


// ============================================
// FILE PATH SETUP
// ============================================

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// ============================================
// MONGODB CLIENT
// ============================================

let mongoClient: MongoClient | null = null;

const getMongoClient = async (): Promise<MongoClient> => {

  if (!mongoClient) {

    mongoClient = new MongoClient(process.env.MONGODB_URI || "");

    await mongoClient.connect();

    console.log("Connected to MongoDB for knowledge base");

  }

  return mongoClient;

};


// ============================================
// EMBEDDINGS
// ============================================

const getEmbeddings = () => {

  if (!process.env.GOOGLE_API_KEY) {
    throw new Error("GOOGLE_API_KEY missing in .env");
  }

  return new GoogleGenerativeAIEmbeddings({
    apiKey: process.env.GOOGLE_API_KEY,
    model: "gemini-embedding-001"
  });

};


// ============================================
// VECTOR STORE
// ============================================

const getVectorStore = async () => {

  const client = await getMongoClient();

  const collection = client
    .db("edureach_db")
    .collection("knowledge_docs");

  return new MongoDBAtlasVectorSearch(getEmbeddings(), {

    collection: collection as any,

    indexName: "edureachvectorindex",

    textKey: "text",

    embeddingKey: "embedding"

  });

};


// ============================================
// INITIALIZE KNOWLEDGE BASE
// ============================================

export const initializeKnowledgeBase = async (): Promise<void> => {

  const client = await getMongoClient();

  const collection = client
    .db("edureach_db")
    .collection("knowledge_docs");

  const existingDoc = await collection.findOne({
    embedding: { $exists: true }
  });

  if (existingDoc) {

    console.log("Knowledge base already indexed");

    return;

  }

  console.log("Indexing knowledge base...");

  const loader = new TextLoader(
    path.join(__dirname, "../../knowledge-base/edureach-knowledge.txt")
  );

  const docs = await loader.load();

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200
  });

  const chunks = await splitter.splitDocuments(docs);

  const vectorStore = await getVectorStore();

  await vectorStore.addDocuments(chunks);

  console.log(`Stored ${chunks.length} knowledge chunks`);

};


// ============================================
// GET RAG RESPONSE WITH MEMORY
// ============================================

export const getRAGResponse = async (
  question: string,
  history: any[] = []
): Promise<string> => {

  try {

    const vectorStore = await getVectorStore();

    const retrievedDocs = await vectorStore.similaritySearch(question, 3);

    const context = retrievedDocs
      .map(doc => doc.pageContent)
      .join("\n\n");


    const conversationHistory = history
      .map(msg => `${msg.role === "user" ? "Student" : "Assistant"}: ${msg.content}`)
      .join("\n");


    const model = new ChatGoogleGenerativeAI({
      model: "gemini-2.5-flash",
      temperature: 0.7
    });


    const prompt = `
You are Ava, an AI counselor for EduReach College.

Use the college information to answer student questions.

College Information:
${context}

Conversation so far:
${conversationHistory}

Student Question:
${question}

Provide a clear and helpful answer based only on the college information when possible.
`;


    const response = await model.invoke(prompt);

    if (typeof response.content === "string") {
      return response.content;
    }

    return "I couldn't generate a response.";

  } catch (error) {

    console.error("RAG Error:", error);

    return "Sorry, I couldn't answer that right now.";

  }

};