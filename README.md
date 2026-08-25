# 🚀 Charly EKLU - Portfolio

Welcome to the source code of my personal developer portfolio! This project is an interactive, bilingual (French/English) web application built to showcase my skills, projects, and career path as a Data Engineer & Fullstack Developer.

## ✨ Features

- **Modern Angular Architecture:** Built with the latest Angular features (Standalone components, Signals, advanced animations).
- **Responsive & Dynamic UI:** The interface uses Material Design mixed with custom CSS variables (Neon Blues, Dark themes) for a unique, tech-focused aesthetic.
- **Bilingual (i18n):** Full support for English and French with seamless live switching via a custom internationalization service.
- **3D Graphics & Animations:** Integrated with `three.js` to render interactive 3D elements (like the rotating pyramids and particle backgrounds).
- **GSAP Animations:** Smooth scroll animations and page transitions powered by GSAP and ScrollTrigger.
- **Performance Optimized:** Uses lazy loading, optimized assets, and efficient DOM rendering.

## 🛠️ Technology Stack

- **Framework:** Angular 17+
- **Styling:** SCSS, Angular Material, Custom CSS Tokens
- **Animations:** GSAP, Three.js
- **Tooling:** npm, Git, GitHub Pages

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SCSBoy/Portfolio.git
   ```
2. Navigate into the project directory:
   ```bash
   cd Portfolio
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Development Server

Run `npm start` or `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## 📦 Build & Deployment

To build the project for production:

```bash
npm run build
```
The build artifacts will be stored in the `dist/` directory.

### Deploying to GitHub Pages

This project is configured to be deployed automatically on GitHub Pages. To deploy manually:

1. Build the project with the correct base href:
   ```bash
   ng build --base-href="/Portfolio/"
   ```
2. Use the `angular-cli-ghpages` package to publish:
   ```bash
   npx angular-cli-ghpages --dir=dist/Portfolio/browser
   ```

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---
*Designed & Developed by [Charly EKLU](https://github.com/SCSBoy)*
