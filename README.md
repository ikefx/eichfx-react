# eichfx-react

## Description
*A lightweight static web site presenting research and projects implemented in 3D.*

---

## Technology Stack

### Vite
This project uses **Vite** as its build tool. Vite is a modern, fast, and lightweight build tool and development server tailored for front-end projects. It leverages native ES modules in the browser during development, resulting in fast hot module replacement (HMR) and streamlined builds for production.

Key benefits of using Vite:
- **Fast Builds:** Vite's optimized build pipeline significantly reduces the time to build and serve the project.
- **Hot Module Replacement (HMR):** Instantly reflects code changes during development without refreshing the page.
- **Pre-bundling Dependencies:** Faster startup and optimized library performance.

For more information, refer to the [Vite documentation](https://vitejs.dev/).

---

### Preact
The site is developed using **Preact**, a lightweight alternative to React. Preact enables the development of fast and efficient single-page applications (SPAs) with the familiar JSX syntax and component-based architecture.

Key reasons Preact is chosen:
- **Small Size:** Preact is lightweight, making it an excellent choice for projects where performance and file size are critical.
- **Compatibility with React:** Preact supports the majority of React APIs, allowing a seamless transition for React developers.
- **Fast Rendering:** Preact is designed with performance in mind, delivering fast and responsive user interfaces.

For more information, refer to the [Preact documentation](https://preactjs.com/).

---

## Bootstrap 5 and Mobile-First Design

This project utilizes **Bootstrap 5** to implement a **mobile-first design approach**, ensuring responsiveness and accessibility across a wide range of devices. A key focus is on creating layouts and features that prioritize smaller screen sizes, scaling up seamlessly to larger form factors, such as tablets and desktops.

### Why Mobile-First Design?
Mobile-first design is a modern development philosophy where the design and functionality of a website are initially tailored for mobile devices. Additional features and styles are progressively added for larger screen sizes. This ensures an optimal experience for the majority of users, who often visit websites from mobile devices.

### Benefits of Bootstrap 5 for Mobile-First Design:
- **Responsive Grid System**: Built-in grid system allows developers to create layouts that adjust dynamically across screen sizes using simple and intuitive classes.
- **Utility-First Classes**: Extensive utility classes (e.g., margins, paddings, flex, grid, etc.) make it easy to craft adaptive and efficient designs with minimal custom CSS.
- **No Dependencies**: Bootstrap 5 eliminates the need for jQuery, reducing dependencies and improving performance.
- **Components for Mobile**: Includes easily customizable components like modals, navigation bars, cards, and buttons that adapt naturally to mobile devices.
- **Customizable Breakpoints**: Predefined responsive breakpoints allow tailored designs for devices in specific screen ranges (e.g., `xs`, `sm`, `md`, `lg`, `xl`, etc.).

With **Bootstrap 5**, this site ensures:
- Fully responsive layouts across devices.
- Mobile-first usability with intuitive navigation patterns.
- A clean and modern aesthetic consistent with the design philosophy.

For more information, refer to the [Bootstrap 5 documentation](https://getbootstrap.com/).

---

## Key Features of the Project
- Developed with **Preact** and **Vite** for high performance and maintainability.
- **Responsive Design:** Implements a mobile-first design approach using Bootstrap 5 for seamless functionality across devices.
- Includes resources and content showcasing **3D technology research** and **animation projects**.
- A **single-page application (SPA)** for smooth navigation and enhanced user experience.

---

### Adding New Screens with Definitions Files
The site can be expanded and maintained easily by using **JSON files** (e.g., `definitions.json`). These files allow developers to define new screens or extend existing ones without requiring significant changes to the overall codebase.

Key benefits of this approach:
- **Flexibility**: By simply adding or modifying JSON files, you can configure the properties and data for specific screens dynamically.
- **Reusability**: The same Preact components can be reused across different screens, reducing redundancy in the code.
- **Maintainability**: Changes to the site structure are easier to manage due to the separation of data (JSON files) from the component logic.

### Workflow to Add/Modify Screens:
1. Use an existing **definition file** as a base for your new configuration.
2. Update the file with the new content or structure you want to introduce.
3. Preact components parse these definitions and render screens dynamically based on the data provided, eliminating the need for manual screen-by-screen coding.

This modular and data-driven design makes the site more scalable, adaptable, and maintainable over time.

---

## How to Run the Project
1. Clone this repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
   The project will be accessible at `http://localhost:3000` or the port defined by Vite.

5. Build for production:
   ```bash
   npm run build
   ```

---

## License
*Provide the appropriate licensing information here.*

---

## Acknowledgements
- Built with [Vite](https://vitejs.dev/).
- Developed using [Preact](https://preactjs.com/).
- Designed with [Bootstrap 5](https://getbootstrap.com/).