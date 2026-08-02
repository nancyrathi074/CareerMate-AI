import "dotenv/config";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

try {
  const chat = await groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: "Say Hello",
      },
    ],
    model: "llama-3.3-70b-versatile",
  });

  console.log(chat.choices[0].message.content);
} catch (err) {
  console.error(err);
}