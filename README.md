<h1 align="center">🚀 <strong>Project Installation Guide</strong></h1>

<p align="center">
  <a href="https://syedktahseen.github.io/internlive/">
    <img src="https://img.shields.io/badge/View%20Project-Click%20Here-blue?style=for-the-badge" alt="View Project Badge">
  </a>
</p>

> This project sets up **React**, **Vite**, and **Tailwind CSS** in the `frontend` folder.

---

## 🛠️ Installation Steps

### 1.  Navigate to the frontend folder:
```bash
cd frontend
````

### 2. ⚙️ Create a Vite + React project:

```bash
npm create vite@latest . -- --template react
```

### 3. 📦 Install core dependencies:

```bash
npm install
```

### 4.  Install Tailwind CSS and essential plugins:

Install the following packages:

* `tailwindcss`
* `@tailwindcss/vite`
* `postcss` (optional if not already)
* `framer-motion`
* `lucide-react`

```bash
npm install tailwindcss @tailwindcss/vite framer-motion lucide-react
```

---

## ⚙️ Configuration

### 5. 🔧 Update `vite.config.js`:

```js
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

---

##  Tailwind Setup

### 6. 📄 Add Tailwind CSS imports to styles:

Edit `src/index.css` or `src/App.css`:

```css
@import "tailwindcss";
```

---

## 🚀 Start Your App

### 7. 🏁 Run the development server:

```bash
npm run dev
```

> The application will launch at: [http://localhost:5173](http://localhost:5173)

---

##  Sample Tailwind Usage

### 8. 📥 Import styles in `src/main.jsx`:

```js
import './index.css';
```

### 9.  Example JSX usage:

```jsx
function App() {
  return (
    <h1 className="text-3xl font-bold underline text-blue-600">
      Hello world!
    </h1>
  );
}
export default App;
```
