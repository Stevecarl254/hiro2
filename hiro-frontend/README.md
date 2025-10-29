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
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 18
nvm use 18
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

# 🧩 Project Structure and Why It’s Organized This Way

This project follows a modular structure, which means we organize the code into small, independent, and reusable parts. Each part (or module) has a single responsibility — making the project easier to maintain, scale, and debug.

Here’s how everything fits together

## 🏗️ Folder Structure Overview

```
hiro-frontend/
├── app/                → Core application routes & page layout
├── components/         → Reusable UI pieces (Navbar, HeroSection, etc.)
├── lib/                → Shared utilities or configurations (e.g., Axios instance)
├── styles/             → Global and theme styles (Tailwind + custom CSS)
├── public/             → Static files like images, icons, and fonts
├── .gitignore          → Files Git should ignore
├── README.md           → Documentation about the project
├── jsconfig.json        → Configures JavaScript/TypeScript import paths
├── next.config.js       → Custom Next.js settings
├── package.json         → Project metadata, dependencies, and scripts
├── package-lock.json    → Exact dependency versions (auto-generated)
├── postcss.config.js    → Configuration for processing CSS
└── tailwind.config.js   → Tailwind theme customization
```

### app/

This folder contains the main structure of the app, including pages and layouts.

app/layout.jsx → Defines the HTML skeleton used across all pages (like the <head> and <body>).

app/page.jsx → The home page (default route /).

In Next.js 13+, the app directory replaces the old pages directory — it uses server and client components for faster performance and cleaner architecture.

### 🧩 components/

This is where we keep reusable pieces of UI, such as the Navbar, HeroSection, or Footer.
Each file represents one logical component — a self-contained unit of code that’s easy to reuse, modify, or test.

✅ This is what modularity means — instead of one giant file doing everything, we break the UI into independent building blocks.

### ⚙️ lib/

Contains library and configuration utilities shared across the app.
Example:

lib/axiosInstance.js sets up a reusable Axios client for all HTTP requests, so you don’t have to repeat baseURL everywhere.

### 🎨 styles/

Houses all styling logic for the project.

global.css → Defines base styles and Tailwind imports.

You can add theme tokens (colors, fonts, etc.) or even component-level overrides here.

Tailwind CSS is used for utility-first styling, meaning we use prebuilt CSS classes directly in components.

## Base Configuration Files and Why They Matter

🧾 .gitignore

Tells Git which files and folders not to track in version control.
Common examples:

```
node_modules/
.env
.next/
```
These are large or sensitive files that shouldn't be pushed into your GitHub repo.


📘 README.md

This file explains what the project is, how to run it, and any setup instructions.
It’s also where you can explain your design choices (exactly what we are doing here)

Anyone visiting your repo can come in here and understand what the project is all about.

🧭 jsconfig.json

Helps JavaScript (and your IDE) understand custom import paths.
For example,
```
import Navbar from "../../components/Navbar"
```

⚙️ next.config.js

This file controls Next.js behavior — e.g., environment variables, image optimization, redirects, or custom build settings.

You can think of it as the “control center” of how your Next.js app runs under the hood.

📦 package.json

Defines:

The project metadata (name, version, author)

The dependencies (libraries you use)

The scripts you can run (npm run dev, npm run build, etc.)

Example:
```
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start"
}
```
It’s the heart of any Node.js project — everything else depends on what’s defined here.

🔒 package-lock.json

Automatically generated by npm.
It locks the exact versions of every installed dependency, ensuring that everyone running the project gets the same package versions (no unexpected bugs).

You should never edit this manually — but always commit it to version control.

💅 postcss.config.js

Defines how PostCSS should process your CSS files (e.g., autoprefixing for browser compatibility).
Tailwind uses PostCSS under the hood, so this file ensures styles compile correctly.

🎨 tailwind.config.js

Configures your Tailwind CSS setup — think of it as your theme engine.
You can define:

 * Custom colors, fonts, and spacing

 *  Dark mode behavior

 * Extra plugins

Example:
```
theme: {
  extend: {
    colors: {
      primary: "#2563eb",
    },
  },
},
```

### Why This Structure Matters

This modular setup:

Keeps the code organized and scalable

Makes it easy to find and edit a specific feature

Encourages reusability and separation of concerns

Allows multiple developers to work without stepping on each other’s toes