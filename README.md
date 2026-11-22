CareerMateAI
---
## About

CareerMateAI is a full-stack career assistance platform designed to help students and job seekers prepare for their professional careers. It includes AI-powered resume analysis with ATS scoring, skill-gap identification and improvement suggestions, along with tools for job matching, interview preparation and career roadmap planning. The platform also provides secure user authentication and a central dashboard to access its features. Built using React, Java Spring Boot, MongoDB Atlas and Groq AI.

Features:
- User registration and login
- JWT-based authentication
- PDF and DOCX resume upload
- AI-powered resume analysis using Groq
- ATS score, strengths, missing skills, and improvement suggestions

Tech Stack:
- Frontend: React, Vite, Tailwind CSS
- Backend: Java, Spring Boot
- Database: MongoDB Atlas
- AI: Groq API
- Authentication: Spring Security, JWT

Live Demo
---
https://career-mate-ai-silk.vercel.app
Run Locally

Frontend:
```bash
cd frontend
npm install
npm run dev
```
Java Backend:

Set the following environment variables:

- `MONGODB_URI`
- `JWT_SECRET`
- `GROQ_API_KEY`
- `FRONTEND_URL`

Start the backend:

```powershell
cd careermate-backend
.\mvnw.cmd spring-boot:run
```
(imp)Do not commit API keys, passwords, or other secrets to the repository.