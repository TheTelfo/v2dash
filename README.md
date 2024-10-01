# v2dash

## Overview

v2dash is a dashboard application built with React, TypeScript, and Vite. It leverages Redux for state management and Material-UI for UI components. The application includes various widgets like charts, grids, and metrics to display data dynamically.

## Project Structure

- **package.json**: Project metadata, scripts, dependencies, and devDependencies.
- **index.html**: Main HTML file with the root div and script to load the React app.
- **src/index.css**: Global CSS styles.
- **README.md**: Project documentation.
- **tsconfig.json**: TypeScript configuration.
- **vite.config.ts**: Vite configuration.
- **public/vite.svg**: Public assets.

## Key Components

- **src/main.tsx**: Entry point of the React application.
- **src/app/app.tsx**: Main App component with theme and layout setup.
- **src/app/store.ts**: Redux store configuration.
- **src/app/layoutSlice.ts**: Redux slice for layout state.
- **src/components/layout/TopBar.tsx**: Top navigation bar.
- **src/components/layout/NavBar.tsx**: Side navigation bar.
- **src/components/layout/SmartPanel.tsx**: Side panel for settings and information.
- **src/components/layout/MainContent.tsx**: Main content area.
- **src/components/shared/ErrorBoundary.tsx**: Error boundary component.
- **src/components/widget/GridWidget.tsx**: Grid widget component.
- **src/components/widget/MetricWidget.tsx**: Metric widget component.
- **src/components/widget/ChartWidget.tsx**: Chart widget component.
- **src/types/dashboard.ts**: TypeScript types for dashboard widgets.

## Dependencies

- **React**: JavaScript library for building user interfaces.
- **Redux**: State management library.
- **MUI**: Material-UI for React components.
- **ECharts**: Charting library.
- **Vite**: Frontend tooling.

## DevDependencies

- **TypeScript**: Typed superset of JavaScript.
- **ESLint**: Linting utility.
- **Prettier**: Code formatter.

## Getting Started

1. **Install dependencies**:
    ```sh
    yarn install
    ```

2. **Run the development server**:
    ```sh
    yarn dev
    ```

3. **Build the project**:
    ```sh
    yarn build
    ```

4. **Preview the build**:
    ```sh
    yarn preview
    ```

## Scripts

- **dev**: Starts the development server.
- **build**: Builds the project for production.
- **lint**: Runs ESLint to lint the codebase.
- **preview**: Previews the production build.

## License

This project is licensed under the MIT License.
