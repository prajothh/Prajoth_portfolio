# Prajoth Kamble — .NET Full Stack Developer Portfolio

Portfolio site for **Prajoth Kamble**, a .NET Full Stack Developer based in Pune with 3.5+ years of experience building scalable enterprise applications using **C#, ASP.NET Core, Web API, Entity Framework Core, SQL Server** and **React.js**.

Built with **React + TypeScript + Vite + Tailwind CSS + Framer Motion**.

## Features

- Modern, premium design with glassmorphism, gradients and micro-interactions
- Dark / Light theme toggle (persisted to `localStorage`, respects system preference)
- Fully responsive (mobile-first)
- Smooth anchor scrolling with a sticky animated navbar
- Sections: Hero, About, Skills, Experience, Projects, Contact
- Framer Motion page and scroll animations
- Reusable, typed components and clean folder structure
- Path aliases (`@/`, `@components/`, `@sections/`, …)

## Tech Stack

| Category       | Tool                                |
| -------------- | ----------------------------------- |
| Framework      | React 18 + TypeScript               |
| Build          | Vite 5                              |
| Styling        | Tailwind CSS 3                      |
| Animation      | Framer Motion                       |
| Icons          | react-icons                         |
| Utilities      | clsx                                |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command             | What it does                      |
| ------------------- | --------------------------------- |
| `npm run dev`       | Start Vite dev server             |
| `npm run build`     | Type-check and build for production |
| `npm run preview`   | Preview the production build      |
| `npm run type-check`| TypeScript only, no emit          |

## Project Structure

```
src/
├── assets/           Static assets (images, svg, etc.)
├── components/       Reusable UI components (Navbar, Footer, Button, …)
├── data/             Dummy/static data (projects, skills, experience)
├── hooks/            Custom hooks (useTheme, useScrollSpy, …)
├── pages/            Page-level components (Home)
├── sections/         Page sections (Hero, About, Projects, …)
├── types/            Shared TypeScript types
├── utils/            Helpers (cn, constants)
├── App.tsx
├── main.tsx
└── index.css
```

## Customizing Content

All dummy content lives in `src/data/` — edit those files to personalize the portfolio without touching component code.

## Contact

- Email: prajothkamble16@gmail.com
- Phone: +91 87668 01375
- Location: Pune, Maharashtra, India

## License

MIT © Prajoth Kamble
