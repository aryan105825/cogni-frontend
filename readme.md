CogniPath 🧠: AI-Powered Adaptive Learning CompanionProject Type:
Hackathon Entry (48-hour sprint) for Barriers to Learning🎯 Core
MissionCogniPath transforms any raw educational material---from articles
and PDFs to websites---into a personalized, multi-modal Learning Hub.
Our mission is to make learning more accessible, interactive, and
genuinely effective for everyone by tackling common barriers to
traditional study.✨ Minimum Viable Product (MVP) FeaturesThis is a list
of the core functionalities implemented within the 48-hour hackathon
timeline:1. Universal Content IngestionInstantly process content from
diverse sources:Raw Text: Paste text directly into the
application.Document Upload: Upload PDF files for processing.Web Links:
Provide URLs for articles or documentation.2. Dynamic Learning Hub
GenerationLeveraging the Gemini Pro API, CogniPath generates a
comprehensive, interactive study environment:Focus Summary: An
AI-generated, concise, and high-impact summary of the source
material.Audio Digest: An AI-generated audio version of the summary for
auditory learners.Interactive Quizzing: Automatically created
multiple-choice questions and digital flashcards for immediate
self-assessment.Concept Weaver (JSON Graph): A structured, data-driven
representation of key concepts and their relationships, ready for
advanced visualization.3. Asynchronous Processing & Modern
UINon-Blocking Backend: Content processing runs asynchronously, ensuring
a responsive user experience (UI doesn\'t freeze).Sleek Interface: Built
with React and MUI, the application features a modern, responsive design
with clear information hierarchy.🚀 Future Scope & Stretch GoalsThese
are key features identified for the project\'s continued
development:Analogy Engine: Simple, one-click analogies for complex
terms to aid deeper understanding.Improved Graph Visualization: Fully
interactive, draggable, and dynamic concept maps.Browser Extension: A
dedicated tool to generate a Learning Hub instantly from any active
webpage.LMS Integration: Connectors for popular Learning Management
Systems (e.g., Canvas, Moodle).Collaborative Learning: Functionality to
share, annotate, and collectively build content hubs.Mobile-Friendly
Application: Dedicated PWA or native mobile support.💻 Tech
StackComponentTechnologies UsedFrontendReact, TypeScript, MUI (Material
UI), React Router DOM, ViteBackendPython, FastAPI, PydanticAI CoreGemini
Pro API (via Google AI Studio)DeploymentVercel (Frontend), Render
(Backend)⚡ Quick Start (Local Development)Follow these steps to set up
and run the CogniPath application locally:1. Clone Repositorygit clone
\[YOUR_REPO_URL\] cd cognipath 2. Install DependenciesYou will need
separate environments for the frontend and backend.# Frontend npm
install 3. Start ServicesEnsure your Gemini API key is configured in
your backend environment variables.# Start Frontend (Vite) npm run dev
\# Start Backend (FastAPI) uvicorn main:app \--reload 4. Access
ApplicationOpen your web browser and navigate to:
http://localhost:5173✅ Hackathon HighlightsFull-Stack Deployment:
Designed and deployed a complete, functional full-stack application
within 48 hours.AI Integration: Successfully implemented a core AI
service using the Gemini Pro API to drive personalized content
generation.User Focus: Priority given to a polished UI/UX, making the
complex AI service accessible and intuitive for the end-user.
