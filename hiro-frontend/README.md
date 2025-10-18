# 🧭 Hiro Frontend — Architecture & Setup Guide
A modular **Next.js + Tailwind CSS** frontend for the Hiro project.

---

## ⚙️ Overview
This frontend is built with **Next.js (React Framework)** and **Tailwind CSS** for styling.  
Instead of keeping everything inside a single large `index.html` file, we’ve modularized the project into multiple reusable components and folders.

This structure makes the project:
- Easier to **maintain and scale**
- Faster to **debug and test**
- Cleaner for **collaboration**

---

## 📁 Project Structure

<pre> ```bash hiro-frontend/ │ ├── app/ # Main app pages and layouts │ ├── layout.jsx # Root layout (header, footer, metadata) │ └── page.jsx # Homepage content │ ├── components/ # Reusable UI sections and components │ ├── Navbar.jsx # Top navigation bar │ ├── HeroSection.jsx # Hero banner section │ ├── AboutSection.jsx # "About Us" section │ ├── ServicesSection.jsx # "Our Services" section │ ├── WhyChooseUs.jsx # "Why Choose Us" section │ └── Footer.jsx # Footer section │ ├── styles/ # Styling files │ └── global.css # Tailwind layers + global overrides │ ├── lib/ # Helper functions (if needed) │ ├── package.json # Project dependencies & npm scripts ├── next.config.js # Next.js configuration ├── postcss.config.js # PostCSS config (used by Tailwind) ├── tailwind.config.js # Tailwind setup (theme, colors, fonts) ├── jsconfig.json # Path aliases for cleaner imports ├── node_modules/ # Installed packages └── package-lock.json # Locks dependency versions ``` </pre>


---

## 🧩 Why Modular Architecture?

In older web setups, everything sits inside one `index.html` file — structure, styles, and scripts all tangled.  
That becomes hard to manage as the project grows.

Here’s why this structure is better:

| Concept | Why It’s Used |
|----------|---------------|
| **Next.js** | Handles routing, server-side rendering, and optimization |
| **React Components** | Keeps sections separate and reusable |
| **Tailwind CSS** | Utility-first styling for speed and consistency |
| **Folder Organization** | Makes collaboration and debugging much easier |

---

## 🚀 Getting Started From Scratch

Follow these steps if setting up on a new machine.

### 1️⃣ Install Node.js and npm
Check versions:
```bash
node -v
npm -v
```
---

## 🧩 Why Modular Architecture?

In older web setups, everything sits inside one `index.html` file — structure, styles, and scripts all tangled.  
That becomes hard to manage as the project grows.

Here’s why this structure is better:

| Concept | Why It’s Used |
|----------|---------------|
| **Next.js** | Handles routing, server-side rendering, and optimization |
| **React Components** | Keeps sections separate and reusable |
| **Tailwind CSS** | Utility-first styling for speed and consistency |
| **Folder Organization** | Makes collaboration and debugging much easier |

---

## 🚀 Getting Started From Scratch

Follow these steps if setting up on a new machine.

### 1️⃣ Install Node.js and npm
Check versions:
```bash
node -v
npm -v

---

## 🧩 Why Modular Architecture?

In older web setups, everything sits inside one `index.html` file — structure, styles, and scripts all tangled.  
That becomes hard to manage as the project grows.

Here’s why this structure is better:

| Concept | Why It’s Used |
|----------|---------------|
| **Next.js** | Handles routing, server-side rendering, and optimization |
| **React Components** | Keeps sections separate and reusable |
| **Tailwind CSS** | Utility-first styling for speed and consistency |
| **Folder Organization** | Makes collaboration and debugging much easier |

---

## 🚀 Getting Started From Scratch

Follow these steps if setting up on a new machine.

### 1️⃣ Install Node.js and npm
Check versions:
```bash
node -v
npm -v
```

If not installed:

```bash
sudo apt update
sudo apt install nodejs npm
```

Or install via nvm (recommended):

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
source ~/.bashrc
nvm install --lts
```

### 2️⃣ Clone the Project
```bash
git clone https://github.com/yourusername/hiro-frontend.git
cd hiro-frontend
```

### Install Dependencies
```bash
npm install
```

If you face peer dependency issues:
```bash
npm install --legacy-peer-deps
```

### Install Tailwind CSS & Supporting Tools
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Configure Tailwind

In tailwind.config.js, make sure the content paths are set correctly:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Then open styles/global.css and ensure it includes:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 6️⃣ Run the Development Server
```bash
npm run dev
```
Then open your browser to:
```
http://localhost:3000
```

You should see the homepage fully rendered with Tailwind styles.

Project: Hiro Frontend
Tech Stack: Next.js · React · Tailwind CSS · PostCSS · npm