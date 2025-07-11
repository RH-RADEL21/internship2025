# 🚀 Project Installation

<p align="center">
  <strong>A blazing fast front-end setup using Vite, React, Tailwind CSS, Framer Motion, and Lucide Icons</strong>
</p>

<p align="center">
  <a href="https://syedktahseen.github.io/internlive/" target="_blank">
    <img src="https://img.shields.io/badge/View%20Live%20Project-1a73e8?style=for-the-badge&logo=github&logoColor=white" alt="Live Demo Badge">
  </a>
</p>

---

## 🛠️ Project Installation

This project sets up **React**, **Vite**, and **Tailwind CSS** in the `frontend` folder.

### 📦 Installation Steps

1. **Navigate to the frontend folder:**
   ```bash
   cd frontend
````

2. **Create a Vite + React project:**

   ```bash
   npm create vite@latest . -- --template react
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Install Tailwind CSS and additional libraries:**

   ```bash
   npm install tailwindcss @tailwindcss/vite framer-motion lucide-react
   ```

5. **Configure Vite with Tailwind:**

   In `vite.config.js`:

   ```javascript
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';
   import tailwindcss from '@tailwindcss/vite';

   export default defineConfig({
     plugins: [react(), tailwindcss()],
   });
   ```

6. **Import Tailwind in your CSS:**

   In `src/index.css` and `src/App.css`, add:

   ```css
   @import "tailwindcss";
   ```

7. **Start the dev server:**

   ```bash
   npm run dev
   ```

   The app will open at: [http://localhost:5173](http://localhost:5173)

---

## ✨ Tailwind Example in JSX

```jsx
function App() {
  return (
    <h1 className="text-3xl font-bold underline text-center text-blue-600 mt-10">
      Hello world!
    </h1>
  );
}
export default App;
```

---

## 🌐 Live Demo

<p align="center">
  <a href="https://syedktahseen.github.io/internlive/" target="_blank">
    <img src="https://img.shields.io/badge/Click%20Here%20to%20View%20Live%20Project-FFA600?style=for-the-badge&logo=firefox-browser&logoColor=white" alt="View Live">
  </a>
</p>
```

---

