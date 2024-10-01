# Bend Logic Dashboard Project Index

## Project Structure


## Detailed Structure

### `src/`

The `src` directory contains all the source code for the application.

#### `app/`

- **`app.tsx`**: The main App component that sets up the theme, layout, and integrates Redux store.
- **`store.ts`**: Configures the Redux store and combines all reducers.
- **`layoutSlice.ts`**: Redux slice managing the layout state, including the navigation bar and smart panel visibility.

#### `components/`

Contains reusable and modular components divided into subdirectories based on their functionality.

- **`layout/`**
  - **`MainContent.tsx`**: Serves as a template for the main content area of each page. It adjusts margins based on the visibility of the NavBar and SmartPanel.
  - **`NavBar.tsx`**: Side navigation bar component that contains navigation links.
  - **`SmartPanel.tsx`**: Side panel for settings and additional information.
  - **`TopBar.tsx`**: Top navigation bar with controls to toggle the NavBar and SmartPanel.

- **`shared/`**
  - **`ErrorBoundary.tsx`**: Error boundary component to catch and display errors gracefully.
  - **`MUIButton.tsx`**: Custom styled button component using MUI.
  - **`MUIInput.tsx`**: Custom styled input component using MUI.

- **`widget/`**
  - **`ChartWidget.tsx`**: Widget component for displaying charts using ECharts.
  - **`GridWidget.tsx`**: Widget component for displaying data grids.
  - **`MetricWidget.tsx`**: Widget component for displaying metrics.

- **`chart/`**
  - **`BaseChart.tsx`**: Base component for chart configurations.
  - **`BarChart.tsx`**: Component for rendering bar charts.
  - **`LineChart.tsx`**: Component for rendering line charts.
  - **`GaugeChart.tsx`**: Component for rendering gauge charts.

- **`grid/`**
  - **`DataGrid.tsx`**: Component for displaying data in a grid layout.

#### `pages/`

Each file in the `pages` directory represents a distinct page in the application. They utilize `MainContent.tsx` as a template to maintain a consistent layout.

- **`Overview.tsx`**: Overview page displaying general information and summaries.
- **`Actions.tsx`**: Page for managing user actions.
- **`Builder.tsx`**: Page for building or configuring dashboard widgets.
- **`Data.tsx`**: Page for data management and visualization.
- **`Goals.tsx`**: Page for setting and tracking goals.
- **`LogicLayer.tsx`**: Page handling the business logic layer.
- **`Reports.tsx`**: Page for generating and viewing reports.

#### `types/`

- **`dashboard.ts`**: TypeScript interfaces and enums defining the structure of dashboard widgets.

### Configuration Files

- **`vite.config.ts`**: Configuration for Vite, including plugins used.
- **`tsconfig.json`**, **`tsconfig.app.json`**, **`tsconfig.node.json`**: TypeScript configuration files for different parts of the project.
- **`eslint.config.js`**: ESLint configuration for linting TypeScript and React code.
- **`.prettierrc`**: Prettier configuration for code formatting.
- **`.gitignore`**: Specifies files and directories to be ignored by Git.

### Entry Points

- **`main.tsx`**: Entry point of the React application. Renders the `App` component within a Redux `Provider`.
- **`index.css`**: Global CSS styles applied throughout the application.

## State Management

The application uses Redux for state management, configured in `src/app/store.ts`. The `layoutSlice.ts` manages the state related to the layout, such as the visibility of the `NavBar` and `SmartPanel`.

### `layoutSlice.ts`



## Styling

The project utilizes Material-UI (MUI) for consistent and responsive UI components. Global styles are defined in `src/index.css`, and component-specific styles are managed using MUI's `sx` prop and styled components.

## Building and Running

### Scripts

- **`dev`**: Starts the development server.
- **`build`**: Compiles the TypeScript and bundles the project for production.
- **`lint`**: Runs ESLint to analyze code for potential errors and enforce coding standards.
- **`preview`**: Previews the production build locally.
- **`format`**: Formats the codebase using Prettier.
- **`format:check`**: Checks the code formatting without making changes.

### Installation

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

## Adding New Components and Pages

### Shared Components

Place reusable components in the `src/components/shared/` directory. These components can be used across different parts of the application to maintain consistency.

### Layout Components

Use `src/components/layout/MainContent.tsx` as a template when creating new pages in the `src/pages/` directory. This ensures a consistent layout and structure across all pages.

### Creating New Pages

1. **Create a new page file** in `src/pages/`, e.g., `NewPage.tsx`.
2. **Use `MainContent`** to structure the page:
    ```typescript:src/pages/NewPage.tsx
    import React from 'react';
    import MainContent from '../components/layout/MainContent';

    const NewPage: React.FC = () => {
      return (
        <MainContent>
          {/* Your page content goes here */}
        </MainContent>
      );
    };

    export default NewPage;
    ```

3. **Update Routing** if applicable to include the new page.

## Extending Functionality

The modular structure allows for easy extension of features:

- **Adding New Widgets**: Create new widget components in `src/components/widget/` and update the dashboard to include them.
- **State Management**: Create additional Redux slices as needed and integrate them into `store.ts`.
- **Charts and Data Visualization**: Utilize or extend chart components in `src/components/chart/` to support various data visualization needs.

## Dependencies

Refer to `package.json` for a complete list of dependencies and devDependencies used in the project.

## License

This project is licensed under the MIT License.