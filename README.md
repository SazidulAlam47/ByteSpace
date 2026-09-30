# 🚀 ByteSpace - Modern E-Learning Platform

ByteSpace is a fully responsive, modern e-learning platform frontend built to connect eager learners with expert creators. It offers a seamless, interactive user interface for discovering, tracking, and engaging with educational content across multiple disciplines like Design, Development, IT & Business, and more.

## ✨ Key Features

- **Dynamic Course Browsing:** Intuitive search and filtering system with category-based navigation.
- **Detailed Course Pages:** Comprehensive course details, including syllabus overviews, instructor information, pricing cards, and student reviews.
- **Interactive Lesson Player:** A dedicated workspace for students to watch course videos and track module progress.
- **Creator Profiles:** Dedicated instructor portfolios showcasing their active courses, expertise, and community ratings.
- **Authentication Pages:** Clean, split-screen Login and Registration layouts.
- **Responsive Design:** Pixel-perfect, mobile-friendly interface built strictly adhering to modern UI/UX principles (designed via Figma/Pixso).

## 🛠️ Tech Stack

- **Framework:** [React 18](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Routing:** [React Router v7](https://reactrouter.com/) (using `createBrowserRouter`)
- **Linting:** [ESLint](https://eslint.org/) (Flat Config)

## 📁 Folder Structure

The project follows a modular, scalable directory structure:

```text
src/
├── assets/         # Static visual assets, images, and SVG icons
├── components/     # Reusable UI components (CourseCard, CategoryCard, etc.)
├── constants/      # Static data, mock configurations, and text constants
├── layouts/        # Structural wrappers (MainLayout for global header/footer, AuthLayout)
├── pages/          # Full page views (Home, CourseDetails, SearchPage, CreatorProfile, etc.)
├── routes/         # Router configuration and path definitions
├── shared/         # Global shared UI elements (Header, Footer)
└── types/          # TypeScript interfaces and type definitions
```

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd doin-tech
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

## 📜 Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Compiles the TypeScript code and builds the project for production.
- `npm run lint`: Runs ESLint to identify and fix code style issues (Unused imports, formatting errors, etc.).
- `npm run preview`: Bootstraps a local web server to preview the production build.

## 🎨 Design & Architecture Notes

- **Component Architecture:** Pages are strictly split into individual sections (e.g., `DiscoverSection`, `HeroSection`) to maintain readability. Reusable cards are abstracted into the `src/components` folder.
- **Type Safety:** All props, component structures, and constant data objects are strictly typed via the `src/types` directory.
- **Code Style:** All components utilize ES6 Arrow Functions and end-of-file `export default` statements for consistency.
