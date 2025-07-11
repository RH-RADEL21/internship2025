# Project Installation

<a href="https://syedktahseen.github.io/internlive/" style="display: inline-block; padding: 10px 20px; background-color: #1a73e8; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">View Project</a>

This project sets up React, Vite, and Tailwind CSS in the `frontend` folder.

## Installation

1. **Navigate to the frontend folder:**
   ```bash
   cd frontend
   ```

2. **Create a Vite + React project:**
   ```bash
   npm create vite@latest . -- --template react
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Install Tailwind CSS and additional dependencies:**
   Install `tailwindcss`, `postcss`, `@tailwindcss/vite`, `framer-motion`, and `lucide-react`:
   ```bash
   npm install tailwindcss @tailwindcss/vite framer-motion lucide-react
   ```

5. **Configure the Vite plugin:**
   Update `vite.config.js` to include the `@tailwindcss/vite` plugin:
   ```javascript
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';
   import tailwindcss from '@tailwindcss/vite';

   export default defineConfig({
     plugins: [
       react(),
       tailwindcss(),
     ],
   });
   ```

6. **Import Tailwind CSS:**
   Add Tailwind directives to `src/index.css` and `src/App.css`:
   ```css
   @import "tailwindcss";
   ```

7. **Start the build process:**
   Run the development server:
   ```bash
   npm run dev
   ```

   The application opens at `http://localhost:5173` (or another port if in use).

8. **Use Tailwind in your HTML/JSX:**
   Ensure your CSS is included in `src/main.jsx`:
   ```javascript
   import './index.css';
   ```

   Example usage in `src/App.jsx`:
   ```javascript
   function App() {
     return (
       <h1 className="text-3xl font-bold underline">Hello world!</h1>
     );
   }
   export default App;
   ```
```
