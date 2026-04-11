# Personal Website Project Guide for Backend Developers

Welcome to this project! This guide is for backend developers who might be unfamiliar with modern frontend frameworks like Next.js and React.

## Core Technologies

Think of this stack as a way to build a user interface that runs in the browser, with some special features that make it fast and efficient.

*   **[Next.js](https://nextjs.org/):** This is the main framework. If you're familiar with backend frameworks like Django or Ruby on Rails, Next.js serves a similar purpose but for the frontend. It handles routing, rendering, and provides a structured way to build a web application. A key feature is that it can render pages on the server (Server-Side Rendering) or at build time (Static Site Generation), which is great for performance and SEO.
*   **[React](https://react.dev/):** This is a library for building user interfaces. You create reusable "components" (like buttons, forms, or whole pages) and React efficiently updates the UI when data changes. It's like the templating engine of your backend framework, but much more powerful and interactive.
*   **[TypeScript](https://www.typescriptlang.org/):** This adds static typing to JavaScript. If you're used to languages like Java, C#, or Go, you'll feel right at home. It helps catch errors early and makes the code easier to understand and refactor.

### Why Next.js?

You might wonder what Next.js is doing on top of React. Think of it this way: React is the engine, but Next.js is the whole car.

Next.js provides the structure and essential features that you'd otherwise have to build yourself, including:

*   **File-System Based Routing:** The `src/app` directory structure automatically creates your site's URLs. This is a huge time-saver compared to manually configuring a router.
*   **Server-Side Rendering (SSR) and Static Site Generation (SSG):** Next.js can pre-render pages on the server or at build time. This means the user gets a fully-formed HTML page, which is faster to load and better for search engines. Without this, you'd have a "Single Page Application" (SPA) that loads a blank HTML page and then builds the UI using JavaScript in the browser, which can feel slow.
*   **Code Splitting:** Next.js automatically splits your code into smaller chunks, so each page only loads the JavaScript it needs. This improves performance significantly.
*   **Build Optimizations:** When you build the project for production, Next.js optimizes images, minifies code, and performs many other tricks to make the site as fast as possible.

**What would happen if you removed Next.js?**

You would be left with just the React components in `src/components`. You would lose:

*   The routing system.
*   Server-side rendering and static site generation.
*   All the performance optimizations.
*   A development server with hot-reloading.

In short, you would have to manually set up a build system (like Webpack or Vite), configure a router (like React Router), and decide how you want to render your pages. You'd be going from a fully-featured framework to a pile of parts that you have to assemble yourself. For a content-focused site like this, Next.js provides a robust and efficient foundation.

## Project Structure Explained

Here's a breakdown of the important files and directories:

```
/
├── public/                  # Static assets (images, fonts, etc.)
├── src/
│   ├── app/                 # Main application pages and layouts
│   │   ├── layout.tsx       # The main layout for the whole site
│   │   ├── page.tsx         # The homepage of the site
│   │   └── ...              # Other pages as folders
│   └── components/          # Reusable UI components (buttons, navbars, etc.)
├── next.config.ts           # Next.js configuration
├── package.json             # Project dependencies and scripts
└── tsconfig.json            # TypeScript configuration
```

### `src/app` - The Core of Your Application

This directory uses a file-system based router. This means the URL structure of your site is determined by the folder structure here.

*   `src/app/layout.tsx`: This is the main template for your entire application. It's similar to a `base.html` or `_layout.cshtml` file in backend frameworks. It defines the overall HTML structure (the `<html>` and `<body>` tags) and usually includes the main navigation and footer.
*   `src/app/page.tsx`: This is the file for the homepage (i.e., the `/` route).
*   `src/app/resume/page.tsx`: This would be the page for the `/resume` route. Each folder inside `app` represents a new URL segment.

The `.tsx` extension means it's a TypeScript file that contains JSX (React's syntax for writing HTML-like code).

### `src/components` - Reusable UI Pieces

This is where you'll find reusable UI elements. Think of these as functions or classes that render a piece of the UI. For example, you might have:

*   `Navigation.tsx`: The site's navigation bar.
*   `StatusBar.tsx`: A status bar component.
*   `TerminalWindow.tsx`: A component that mimics a terminal window.

These components are then imported into your pages in the `src/app` directory. This is a core concept of React: building complex UIs by composing smaller, independent components.

### `public` - Static Files

This directory is for any static assets that need to be served directly, like images, fonts, or SVGs. You can link to these directly in your code.

### Configuration Files

*   `next.config.ts`: This is where you configure Next.js. You can set up redirects, environment variables, and other advanced settings here.
*   `package.json`: This is the standard Node.js file for managing project dependencies and scripts. The `dependencies` section lists all the libraries the project uses, and the `scripts` section defines commands like `npm run dev` to start the development server.
*   `tsconfig.json`: This file configures the TypeScript compiler. It sets the rules for how TypeScript should check your code.

## How to Run This Project

1.  **Install Dependencies:**
    You'll need [Node.js](https://nodejs.org/) installed. Then, in your terminal, run:
    ```bash
    npm install
    ```
    This will download all the necessary libraries listed in `package.json`.

2.  **Run the Development Server:**
    ```bash
    npm run dev
    ```
    This will start a local server, usually on `http://localhost:3000`.

3.  **View Your Site:**
    Open your browser to `http://localhost:3000`. You should see the site running. Any changes you make to the code will automatically reload the page in your browser.

## A Backend Developer's Analogy

| Frontend (This Project) | Backend (Your World) |
| :--- | :--- |
| `src/app/` | `controllers/` or `routes/` |
| `src/components/` | `views/partials/` or `shared/` libraries |
| `page.tsx` | An action in a controller that renders a view |
| React Component | A template partial or a helper function that generates HTML |
| `npm run dev` | `rails server` or `python manage.py runserver` |
| `package.json` | `pom.xml`, `Gemfile`, `requirements.txt` |

Hopefully, this guide helps you get started. The key is to think of everything as a component, and how they fit together to build the final page.
