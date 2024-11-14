# My- Portfolio Website

This is my personal portfolio website built using modern web technologies including React, Vite, TailwindCSS, Shadcn/UI, Framer Motion, and React Icons. The website showcases my skills, projects, and other relevant information, which are dynamically rendered from a CMS-like `data.js` file.

## Table of Contents

- Technologies Used
- Features
- Getting Started
  - Prerequisites
  - Installation
  - Development
  - Building for Production
- Customizing Content
- Acknowledgements
- License

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Next-generation build tool for fast development and production builds.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **Shadcn/UI**: A UI component library for React that provides components with good accessibility and design out of the box.
- **Framer Motion**: A powerful animation library for React that enhances user interactions.
- **React Icons**: Collection of icons for React.
- **Yarn**: JavaScript package manager used to install dependencies.
- **CMS (data.js)**: A simple CMS-like structure storing all content and data for easy customization.

## Features

- **Responsive Design**: The website is fully responsive, ensuring a seamless experience across all devices.
- **Smooth Animations**: Leveraging Framer Motion to add smooth page transitions and interactive animations.
- **Modular Design**: Using Shadcn/UI for consistent UI components.
- **Customizable Content**: All personal information, projects, and other data are centralized in the `data.js` file, which makes it easy to update content.
- **Fast Build and Development**: Thanks to Vite, the development experience is fast with hot module replacement (HMR).

## Getting Started

Follow these steps to set up and run the portfolio website locally.

### Prerequisites

- **Node.js** and **Yarn** should be installed on your machine. You can download them here:
  - [Node.js](https://nodejs.org/)
  - [Yarn](https://yarnpkg.com/)

### Installation

1.  Clone the repository:
    `git clone https://github.com/Abhijit0303/new-portfolio`
2.  Navigate to the project folder:

    `cd new-portfolio`

3.  Install dependencies using Yarn:

    `yarn install`

### Development

To start the development server and run the portfolio locally:

1.  Run the following command:

    `yarn dev`

    (Remember I am using --host in dev script just for an ease of chacking dev server in other devices)

2.  Open your browser and navigate to `http://localhost:3000` to view the portfolio.

    Any changes made to the code will be automatically reflected in the browser with Hot Module Replacement (HMR).

### Building for Production

To build the portfolio for production:

1.  Run the following command:

    `yarn build`

2.  After building, the optimized production files will be available in the `dist/` directory. You can serve the build locally with:

    `yarn preview`

    You can now deploy the contents of the `dist/` folder to your hosting provider.

### Key Files:

- **data.js**: This file contains all your personal information, project details, skills, and any other content you want to display. It acts as a CMS and can be easily modified without needing to touch the UI components.
- **tailwind.config.js**: Customize TailwindCSS settings like theme colors, breakpoints, and plugins here.
- **vite.config.js**: Vite-specific configuration. This file contains the build settings and plugins.

## Customizing Content

You can update your personal information and portfolio content by editing the `data.js` file located in the `/src/cms` folder.

## Acknowledgements

- [Vite](https://vitejs.dev/) – For blazing-fast development and build speed.
- [React](https://reactjs.org/) – The core library for building user interfaces.
- [TailwindCSS](https://tailwindcss.com/) – For utility-first CSS styling.
- [Shadcn/UI](https://shadcn.dev/) – A modern UI component library.
- [Framer Motion](https://motion.dev/) – For animating the portfolio with smooth transitions.
- [React Icons](https://react-icons.github.io/react-icons/) – For including various icons in the project.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
