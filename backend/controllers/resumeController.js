import groq from "../config/groq.js";

export const analyzeResume = async (req, res) => {
  try {
    const { resumeText } = req.body;

    const prompt = `
You are an expert ATS Resume Analyzer.

Analyze the following resume.

Resume:
${resumeText}

Return ONLY valid JSON in this format:

{
  "atsScore": 85,
  "strengths": ["...", "...", "..."],
  "missingSkills": ["...", "...", "..."],
  "suggestions": ["...", "...", "..."]
}

Do not use markdown.
Do not use \`\`\`.
Return only JSON.
`;

    const completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-120b",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.2,
    });

    let text = completion.choices[0].message.content;

    console.log("Groq Response:\n", text);

    // Remove markdown if present
    text = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const json = JSON.parse(text);

    res.json(json);
  } catch (error) {
    console.error("Resume Analysis Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};