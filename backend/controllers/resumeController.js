
import groq from "../config/groq.js";
import mammoth from "mammoth";
import { createRequire } from "node:module";

// Load pdf-parse through CommonJS to avoid its unintended debug test execution.
const require = createRequire(import.meta.url);
const pdf = require("pdf-parse");

export const analyzeResume = async (req, res) => {
  try {
    // Check uploaded file
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload a PDF or DOCX resume.",
      });
    }

    let resumeText = "";

    // Extract text from PDF
    if (req.file.mimetype === "application/pdf") {
      const pdfData = await pdf(req.file.buffer);
      resumeText = pdfData.text || "";
    }

    // Extract text from DOCX
    else if (
      req.file.mimetype ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      const result = await mammoth.extractRawText({
        buffer: req.file.buffer,
      });

      resumeText = result.value || "";
    } else {
      return res.status(400).json({
        success: false,
        message: "Only PDF and DOCX files are supported.",
      });
    }

    // Validate extracted text
    resumeText = resumeText.trim();

    if (!resumeText) {
      return res.status(400).json({
        success: false,
        message:
          "Could not extract text from this resume. Please try another file.",
      });
    }

    // Prepare Groq prompt
    const prompt = `
You are an expert ATS Resume Analyzer.

Analyze the resume based on:
- Relevant skills
- Work experience
- Education
- Projects
- Resume structure
- Role-related keywords

Give a realistic ATS score between 0 and 100.

RESUME:
${resumeText.slice(0, 15000)}

Return ONLY valid JSON in this format:

{
  "atsScore": 85,
  "strengths": ["...", "...", "..."],
  "missingSkills": ["...", "...", "..."],
  "suggestions": ["...", "...", "..."]
}

Do not include markdown or code fences.
Return only JSON.
`;

    // Send resume to Groq
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

    let text = completion.choices[0]?.message?.content;

    if (!text) {
      throw new Error("The AI provider returned an empty response.");
    }

    // Clean AI response
    text = text
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    const result = JSON.parse(text);

    // Validate and format response
    const atsScore = Number(result.atsScore);

    return res.json({
      success: true,
      atsScore: Number.isFinite(atsScore)
        ? Math.min(100, Math.max(0, atsScore))
        : 0,

      strengths: Array.isArray(result.strengths)
        ? result.strengths
        : [],

      missingSkills: Array.isArray(result.missingSkills)
        ? result.missingSkills
        : [],

      suggestions: Array.isArray(result.suggestions)
        ? result.suggestions
        : [],
    });

  } catch (error) {
    console.error("Resume Analysis Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Resume analysis failed.",
    });
  }
};
