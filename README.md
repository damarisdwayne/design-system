# Design System Documentation

Welcome to the documentation for our Design System project. This Design System is structured as a monorepo, leveraging Yarn workspaces to manage multiple packages. It includes the following key components:

## Project Structure

- **`package/`**: The root directory of the monorepo.
  - **`core/`**: Contains core components to be exported.
  - **`eslint-config/`**: Houses ESLint configurations for maintaining code quality.
  - **`storybook/`**: Provides documentation for components in the `core` package.
  - **`theme/`**: Holds styling-related configurations, including palettes, colors, grids, fonts, margins, shadows and spacings.
  - **`ts-config/`**: Contains TypeScript configurations.
  - **`utils/`**: Contains utility functions to aid development.

## Installation

To set up the Design System, follow these steps:

1. Clone the project's repository to your local machine.

2. In the root directory of the project, install dependencies using Yarn:

   ```bash
   yarn install
   ```

## Yarn Workspaces

This project utilizes Yarn workspaces to manage multiple packages within a single repository. Yarn workspaces enable us to share dependencies and streamline development processes across packages. With workspaces, we can:

- Centrally manage dependencies for all packages.
- Execute scripts concurrently across packages.
- Simplify development and testing workflows.

## Dependencies

The project uses the following dependencies:

- **`@changesets/cli`**: Manages versioning and changelogs for monorepo projects.
- **`turbo`**: A tool for monorepo management, facilitating script execution across packages.
- **`react-router-dom`**: Adds routing capabilities to React applications for navigating between views.

## Scripts

The following scripts are available in the project's `package.json`:

- **`dev`**: Concurrently runs development servers or tasks across the packages.
- **`build`**: Compiles the project, including packages, for production.
- **`storybook`**: Starts the Storybook development server for documenting and testing UI components.
- **`changeset`**: Manages versioning and changelogs for packages.
- **`version-packages`**: Handles versioning of packages.
- **`release`**: Builds the project (filtered to the `packages/storybook` package) and publishes changesets.

## Usage

To make use of the Damaris UI Design System in your project, follow these steps:

### 1. Install Required Packages

You can easily integrate the core components, theme configurations, utilities, ESLint configurations, and TypeScript configurations into your project. These packages are available on npm and can be installed using Yarn. Simply run the following commands in your project's root directory:

```bash
yarn add @damaris-ui/core
yarn add @damaris-ui/theme
yarn add @damaris-ui/utils
yarn add @damaris-ui/eslint-config
yarn add @damaris-ui/ts-config
```

These commands will add the respective packages as dependencies to your project.

### 2. Import Components and Styles

Once the packages are installed, you can start using the Damaris UI Design System in your application.

#### Example of importing a component and using it:

```bash
import React from 'react';
import { Button } from '@damaris-ui/core';

function MyComponent() {
  return (
    <div>
      <Button variant="primary">Click Me</Button>
    </div>
  );
}

export default MyComponent;
```

### 3.Access Configuration and Utilities

For ESLint configurations and TypeScript configurations, you can extend or use them in your project's ESLint and TypeScript setup respectively.

Example of accessing ESLint configurations:

```bash
// .eslintrc.js
module.exports = {
  extends: ['@damaris-ui/eslint-config'],
  // Your other ESLint configurations...
};
```

#### Example of accessing TypeScript configurations:

```bash
// tsconfig.json
{
  "extends": "@damaris-ui/ts-config",
  // Your other TypeScript configurations...
}
```

Additionally, the @damaris-ui/utils package provides various utility functions that can assist you during development. Import and use these utilities as needed.

For more detailed usage instructions, component documentation, and examples, refer to the Storybook documentation available for the Damaris UI Design System.

By following these steps, you can easily integrate Damaris UI components, styles, and utilities into your project, ensuring a seamless and visually appealing user interface.
