# CareerMateAI

## About
CareerMateAI is a full-stack career assistance platform designed to help students and job seekers prepare for their professional careers. It provides AI-powered resume analysis, ATS scoring, skill-gap identification, job matching, interview preparation and career roadmap planning.

## Features
- **User Authentication:** Secure signup and login using JWT.
- **Resume Analyzer:** AI-powered resume analysis, ATS score, strengths, missing skills and improvement suggestions.
- **Job Matcher:** Compare job descriptions with skills.
- **Interview Preparation:** Practice interview questions.
- **Career Roadmap:** Plan learning goals and career development.
- **Dashboard:** Access career tools from one place.

## Tech Stack

**Frontend:** React, Vite, Tailwind CSS

**Backend:** Java, Spring Boot, Spring Security, JWT

**Database:** MongoDB Atlas

**AI Integration:** Groq API

**Deployment:** Vercel, Render

## Project Structure

```text
CareerMate-AI/
│
├── frontend/              # React frontend
├── careermate-backend/    # Java Spring Boot backend
├── backend/               # Node.js backend (backup)
└── README.md
```

## Live Demo

Frontend: https://career-mate-ai-silk.vercel.app

Backend: https://careermate-java-backend.onrender.com

## Getting Started

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Java Backend

Configure the required environment variables, then run:

```powershell
cd careermate-backend
.\mvnw.cmd spring-boot:run
```

## Environment Variables

Configure these variables before running the backend:

- `MONGODB_URI`
- `JWT_SECRET`
- `GROQ_API_KEY`
- `FRONTEND_URL`

Never commit API keys, passwords or environment files to GitHub.

