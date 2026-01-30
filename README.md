# Brainwave.io - SaaS Landing Page

A modern, responsive SaaS landing page converted from Figma to React code.

## 🚀 Live Demo

[View Live Deployment](https://storage.googleapis.com/metaphi-agent/figma-to-code/f35388e3-7ad3-40e7-a99e-dbea9d4e75ee/index.html)

## 🛠 Tech Stack

*   **Framework:** React 19 (Vite)
*   **Styling:** Tailwind CSS v4
*   **Typography:** Rubik (Headings), Inter (Body)
*   **Icons:** SVG Icons exported from Figma
*   **Language:** TypeScript

## 📂 Project Structure

```
src/
├── components/
│   ├── blocks/      # Page sections (Hero, Features, Pricing, etc.)
│   └── ui/          # Reusable UI atoms (Button, etc.)
├── pages/           # Page layouts
├── assets/          # Static assets (images, icons)
└── index.css        # Global styles & Tailwind theme
```

## 🏃‍♂️ Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start development server:**
    ```bash
    npm run dev
    ```

3.  **Build for production:**
    ```bash
    npm run build
    ```

## 🎨 Design

Based on the "Brainwave.io - Landing Page UI Kit" Figma community file.
*   **Colors:** Brand Dark (`#161C2D`), Brand Green (`#68D585`), Brand Blue (`#473BF0`)
*   **Layout:** 12-column grid system implemented with CSS Flexbox and Grid.

## 📦 Deployment

The project is configured for relative path deployment (`base: './'`), making it suitable for static hosting providers like Google Cloud Storage, S3, or GitHub Pages.
