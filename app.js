const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { GoogleGenerativeAI } = require("@google/generative-ai");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.post("/api/chat", async (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).json({ reply: "No message received." });
  }

  try {
    const result = await model.generateContent(userMessage);
    const response = result.response;
    const text = response.text();
    res.json({ reply: text });
  } catch (err) {
    res.status(500).json({ reply: "Error generating response." });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
