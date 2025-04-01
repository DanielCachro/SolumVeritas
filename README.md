# Solum Veritas

Solum Veritas is a React-based web application built with Vite. The project supports individuals affected by disappearances, offering resources, news, and case studies. It is designed to be fast, responsive, and user-friendly.

## Features

- **Dynamic Routing**: Powered by `react-router-dom` for seamless navigation.
- **Data Fetching**: Uses `@tanstack/react-query` for efficient API data fetching and caching.
- **Responsive Design**: Fully responsive layout with CSS modules.
- **Dynamic Content**: Fetches and displays news, cases, and team member information dynamically.
- **Smooth Animations**: Built with `motion` (Framer Motion) for declarative animations and transitions.
- **Error Handling**: Custom error pages for better user experience.

## Project Structure

```
SolumVeritas/
├── public/                # Static assets
├── src/
│   ├── assets/            # Images and other media
│   ├── components/        # Reusable UI components
│   ├── constants/         # Static data like navigation items
│   ├── hooks/             # Custom React hooks
│   ├── routes/            # Application routes
│   ├── util/              # Utility functions
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Entry point
│   ├── index.css          # Global styles
│   ├── variables.css      # CSS variables
├── .env                   # Environment variables
├── .gitignore             # Git ignore rules
├── package.json           # Project dependencies and scripts
├── vite.config.js         # Vite configuration
├── LICENCE                # Project LICENCE
└── README.md              # Project documentation
```

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/DanielCachro/SolumVeritas.git
   cd solum-veritas
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and configure the following variables:

   ```env
   VITE_API_URL=http://your-api-url
   VITE_IMAGES_URL=http://your-images-url
   VITE_READ_ONLY_TOKEN=your-token-to-access-restricted-api-resource
   ```

## Development

To start the development server:

```sh
npm run dev
```

The application will be available at `http://localhost:5173`.

## Build

To create a production build:

```sh
npm run build
```

The build output will be in the `dist` folder.

## Preview

To preview the production build locally:

```sh
npm run preview
```

## Linting

To run ESLint:

```sh
npm run lint
```

## Key Dependencies

- [React](https://reactjs.org/) - Frontend library
- [Vite](https://vitejs.dev/) - Build tool
- [React Router](https://reactrouter.com/) - Routing library
- [TanStack Query](https://tanstack.com/query/latest) - Data fetching and caching
- [Motion](https://www.framer.com/motion/) - Declarative animations and transitions
- [Slick Carousel](https://react-slick.neostack.com/) - Carousel component
- [Lucide React](https://lucide.dev/) - Icon library

## Image Credits

Some of the photos used in this project were sourced from [Pixabay](https://pixabay.com/pl/) and [Freepik](https://pl.freepik.com/).

## License

This project is licensed under the Solum Veritas License. Solum Veritas is permitted to use and host this software but cannot modify it without explicit written permission from the author. See the `LICENSE` file for details.

## Project Credits

This project was developed pro bono (free of charge) for **Solum Veritas**, a non-profit organization dedicated to supporting individuals affected by disappearances. The goal of this project is to provide a platform that helps raise awareness and offer resources to those in need.

Special thanks to the members of Solum Veritas for their collaboration and trust in this project.

**Design and Development**: Daniel Cachro
