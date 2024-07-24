# Year Progress 🎉

[![Codecov](https://codecov.io/gh/2giosangmitom/year-progress/graph/badge.svg?token=ZEV3SVGNJF)](https://codecov.io/gh/2giosangmitom/year-progress)
[![Tests](https://github.com/2giosangmitom/year-progress/actions/workflows/test.yml/badge.svg)](https://github.com/2giosangmitom/year-progress/actions/workflows/test.yml)

**Year Progress** is a web application that provides a visual representation of the progress of the current year. It helps users see how far they are into the year, month, day, and even the current hour at a glance.

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/2giosangmitom/year-progress?quickstart=1)

## Features ✨

- **Visual Progress Bars 📊:**
  - **Year Progress:** Dynamic progress bar showing the percentage of the year that has passed.
  - **Month Progress:** Displays how far along the current month is.
  - **Day Progress:** Indicates the progress of the current day.
  - **Hour Progress:** Shows the current hour's progress.
- **Responsive Design 📱:** Compatible with various screen sizes and devices.
- **Theme Toggle 🌗:** Easily switch between dark and light themes.

## Technologies Used 🛠️

- **Nuxt.js:** Progressive framework based on Vue.js for building modern web applications.
- **Vue.js:** Versatile JavaScript framework for building user interfaces.
- **Tailwind CSS:** Utility-first CSS framework for styling the application.
- **TypeScript:** Strongly typed programming language that builds on JavaScript.
- **Vitest:** Vite-native unit testing framework.
- **Pinia:** State management library for Vue.js applications.

## Getting Started 🚀

### Prerequisites 📋

Before you begin, ensure you have the following installed on your local development environment:

- **Node.js (v20):** A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **pnpm (v9):** A fast, disk space-efficient package manager.

> [!TIP]
> This repository includes a `flake.nix` file to set up the development environment for the Nuxt.js project. If you have Nix installed, simply run `nix develop` in the project root to avoid installing prerequisites manually. ❄️

### Run Development Server 🖥️

Follow these steps to get a local copy of the portfolio up and running on your machine:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/2giosangmitom/year-progress.git
   ```
   
2. **Navigate to the Project Directory:**

   ```bash
   cd year-progress
   ```

3. **Install Dependencies:**

   ```bash
   pnpm install
   ```
   
4. **Run the Development Server:**

   ```bash
   pnpm dev
   ```

5. **Open in Your Browser:**

   Open your web browser and navigate to `http://localhost:3000` to view the website.

### Building for Production 🏗️

To build the application for production, run:

```bash
pnpm run build
pnpm run preview
```

The application will be available at `http://localhost:3000`.

### Testing ✅

To run the tests with Vitest, use:

```bash
pnpm test
```

### Deployment 🚢

You can deploy the built application to any static hosting service, such as Vercel, Netlify, or GitHub Pages. Follow the specific deployment instructions provided by the hosting service.

- Official documentation: [https://nuxt.com/deploy](https://nuxt.com/deploy)

---

Thank you for using Year Progress! We hope it helps you keep track of your year, month, day, and hour effectively. 😊
