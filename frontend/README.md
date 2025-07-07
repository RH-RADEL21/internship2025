Project Installation
This project sets up React, Vite, and Tailwind CSS in the frontend folder.
Installation

Navigate to the frontend folder:
cd frontend


Create a Vite + React project:
npm create vite@latest . -- --template react


Install dependencies:
npm install


Install Tailwind CSS:Install tailwindcss, postcss, and @tailwindcss/vite:
npm install tailwindcss @tailwindcss/vite


Configure the Vite plugin:Update vite.config.js to include the @tailwindcss/vite plugin:
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
});


Import Tailwind CSS:Add Tailwind directives to src/index.css and src/App.css:
@import "tailwindcss";


Start the build process:Run the development server:
npm run dev


Opens at http://localhost:5173 (or another port if in use).


Use Tailwind in your HTML/JSX:Ensure your CSS is included in src/main.jsx:
import './index.css';

Example usage in src/App.jsx:
function App() {
  return (
    <h1 className="text-3xl font-bold underline">Hello world!</h1>
  );
}
export default App;


