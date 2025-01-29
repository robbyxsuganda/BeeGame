const { GoogleGenerativeAI } = require("@google/generative-ai");

require("dotenv").config();

const gemini = async (keyword) => {
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `tolong berikan saya informasi yang jelas tentang ${keyword}`;

  const result = await model.generateContent(prompt);
  //   console.log(result);
  return result.response.text();
};

module.exports = gemini;
