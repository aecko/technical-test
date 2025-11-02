// backend/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // parse application/json

const PORT = process.env.PORT || 3000;
// Add your prompt here

// Basic healthcheck
app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

/**
 * POST /api/llmRequest
 * - Expected body: { userMessage: string }
 *
 * Behavior in this boilerplate:
 * - Call mockOpenAi(userMessage, prompt)
 *   and return the AI response to the frontend.
 */
const PROMPT = "You are a helpful assistant.";
app.post("/api/llmRequest", async (req, res) => {
  //
  // Implement your solution here.
  //
  res.status(501).json({ error: "Not implemented" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
