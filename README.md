# Technical Test – Frontend & Backend

This repository provides the boilerplate for your technical test. Your task is to build a simple interaction between a frontend and backend, including a text input that sends a request to an endpoint and displays the response.

It’s completely fine if you don’t finish everything. We’re primarily interested in how you approach the problem, so explaining your thought process as you work is encouraged.

---

## Project Structure

```
technical-test/
├── backend/
│   ├── server.js          # Express server boilerplate
│   ├── utility/
│   │   └── mockOpenAi.js  # Mock OpenAI response for testing
│   ├── .env               # Environment variables
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   └── HomePage/
│   │   │       ├── index.jsx  # Main homepage component
│   │   │       └── style.js   # Styled components / MUI styles
│   │   ├── requests/          # API calls (axios + TanStack Query)
│   │   └── main.jsx           # React Vite entry
│   ├── index.html
│   └── package.json
└── README.md
```

---

## Technical Test Overview

### Requirements

1. **Backend**
   - Use the existing unfinished POST route: `/api/llmRequest`
   - Expected request body: `{ userMessage: string }`
   - Respond with an AI-generated text using `mockOpenAi.js`
   - Validate input and return errors for invalid requests

2. **Frontend**
   - Use **React with Vite** and any styling library you feel comfortable with. The project is currently setup using **Material-UI (MUI)**
   - Update `HomePage` with:
     - A **text field** to type a message
     - A **Submit button** to send the message to the backend
     - A **Clear button** to reset the field
     - An **output box** to show the result from the API.

   - Create basic styling for the UI
   - Use must **TanStack Query `useMutation`** to call the backend endpoint `/api/llmRequest`. Feel free to read the documentation and examples.
   - Display loading, error, and success states from the mutation
   - Show the AI response below the text field

---

## Getting Started

### Backend

```bash
cd backend
npm install
npm run dev
```

- Server runs on `http://localhost:3000`
- Test LLM endpoint with curl (Windows CMD example):

```cmd
curl -X POST http://localhost:3000/api/llmRequest -H "Content-Type: application/json" -d "{\"userMessage\": \"Hello!\"}"
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

- Frontend runs on `http://localhost:5173` (default Vite port)
- Connects to backend `/api/llmRequest` for AI responses
- You MUST implement **TanStack Query `useMutation`** for the POST request

---

## Notes for Candidates

- Use `mockOpenAi.js` for AI calls
- Backend should handle proper error responses and validation
- Frontend should display clear UI feedback for:
  - Loading states
  - API errors
  - AI response text
- Focus on building a clean, user-friendly UI

---

## ✅ Deliverables

- Fully working frontend page with:
  - Text input, submit, and clear buttons
  - Proper loading and error handling
  - Display of Mock AI response

- Backend `/api/llmRequest` route implemented
- Clean, readable code and consistent styling

---
