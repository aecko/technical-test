# Technical Test – Frontend & Backend

This repository contains the boilerplate setup for your technical test. The goal is for you to implement a simple frontend and backend interaction with a text input and an AI response endpoint.

---

## 🏗 Project Structure

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

## 📝 Technical Test Overview

### Requirements

1. **Backend**

   - Use the existing POST route: `/api/llmRequest`
   - Expected request body: `{ userMessage: string }`
   - Respond with an AI-generated text using `mockOpenAi.js`
   - Validate input and return errors for invalid requests

2. **Frontend**

   - Use **React with Vite** and **Material-UI (MUI)**
   - Create a page (`HomePage`) with:

     - A **text field** to type a message
     - A **Submit button** to send the message to the backend
     - A **Clear button** to reset the field

   - Style the UI with either **MUI `sx` props** or **styled-components**
   - Use **TanStack Query `useMutation`** to call the backend endpoint `/api/llmRequest`
   - Display loading, error, and success states from the mutation
   - Show the AI response below the text field

---

## ⚡ Getting Started

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

## 🛠 Notes for Candidates

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

## 💡 Tips

- Validate input before sending to the backend
- Keep the UI simple, elegant, and responsive
- Use **TanStack Query mutation** correctly to manage API calls

---
