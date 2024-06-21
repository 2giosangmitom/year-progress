# Year Progress 🎉

[![Codecov](https://codecov.io/gh/2giosangmitom/year-progress/graph/badge.svg?token=ZEV3SVGNJF)](https://codecov.io/gh/2giosangmitom/year-progress)
[![Tests](https://github.com/2giosangmitom/year-progress/actions/workflows/test.yml/badge.svg)](https://github.com/2giosangmitom/year-progress/actions/workflows/test.yml)

**Year Progress** is a web application that provides a visual representation of the progress of the current year. It helps users see how far they are into the year, month, day, and even the current hour at a glance.

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/2giosangmitom/year-progress?quickstart=1)

## Features

- **Visual Progress Bars**:
  - **Year Progress**: Dynamic progress bar showing the percentage of the year that has passed.
  - **Month Progress**: Displays how far along the current month is.
  - **Day Progress**: Indicates the progress of the current day.
  - **Hour Progress**: Shows the current hour's progress.
- **Responsive Design**: Compatible with various screen sizes and devices.
- **Theme Toggle**: Easily switch between dark and light themes.

## Technologies Used

- **Nuxt.js**: Progressive framework based on Vue.js for building modern web applications.
- **Vue.js**: Versatile JavaScript framework for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling the application.
- **TypeScript**: Strongly typed programming language that builds on JavaScript.
- **Vitest**: Vite-native unit testing framework.
- **Pinia**: State management library for Vue.js applications.

## Getting Started

### Prerequisites

Ensure you have the following installed on your local development environment:

- Node.js (v20)
- pnpm (v9)

> [!NOTE]
> This project includes a `flake.nix` file for dependency management. If you have [Nix](https://nixos.org/download) installed, you can run `nix develop` to set up the development environment without manually installing the prerequisites. ❄️

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/2giosangmitom/year-progress.git
   cd year-progress
   ```

2. Install the dependencies using `pnpm`:

   ```bash
   pnpm install
   ```

### Running the Development Server

Start the development server and open the application in your browser:

```bash
pnpm run dev
```

The application will be available at `http://localhost:3000/year-progress`.

### Building for Production

To build the application for production, run:

```bash
pnpm run build
pnpm run preview
```

The application will be available at `http://localhost:3000/year-progress`.

### Testing

To run the tests with Vitest, use:

```bash
pnpm run test
```

### Deployment

You can deploy the built application to any static hosting service, such as Vercel, Netlify, or GitHub Pages. Follow the specific deployment instructions provided by the hosting service.

- Official documentation: [https://nuxt.com/deploy](https://nuxt.com/deploy)

---

Thank you for using Year Progress! We hope it helps you keep track of your year, month, day, and hour effectively. 😊
