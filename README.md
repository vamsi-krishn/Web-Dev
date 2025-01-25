# Full-Stack Web Application: User Registration and Data View

## Overview

This project is a full-stack web application built using modern web technologies. It facilitates user registration through an interactive form and displays the submitted data in a user-friendly, tabular format. The application integrates HTML, CSS, JavaScript, and React for a seamless user experience.

---

## Features

1. **User Registration Form**:
   - HTML form elements for user inputs (First Name, Last Name, Gender, Organization, Contact Number, and Email).
   - Client-side JavaScript validation for required fields and proper formatting (e.g., email, contact number).

2. **Data Display**:
   - Dynamically displays submitted form data in a responsive table.
   - Interactive elements like a "Back to Form" button for navigation.

3. **Responsive Design**:
   - Tailwind CSS for styling with a focus on mobile-first design.
   - Gradient backgrounds, cards, and hover effects for a polished UI.

4. **React Integration**:
   - React components handle dynamic rendering and state management.
   - React Router for seamless client-side navigation.

5. **JavaScript**:
   - Form validation and interactivity.
   - Dynamic DOM manipulation using React and native JavaScript.

---

## Tech Stack

- **Frontend**:
  - **HTML**: Semantic markup for structuring the application.
  - **CSS**: Tailwind CSS for utility-first styling.
  - **JavaScript**: Core language for interactivity and logic.
  - **React**: JavaScript library for building dynamic user interfaces.

- **Build Tool**:
  - **Vite**: Fast build tool for modern web applications.

- **Icons**:
  - Lucide React: Lightweight icon library.

---

## Installation

### Prerequisites

Ensure you have the following installed:

- **Node.js** (>= 14.18.0)
- **npm** or **yarn**

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the application in your browser:
   ```
   http://localhost:5173
   ```

---

## How It Works

1. **HTML**:
   - Used for creating the structure of the application, including the form and table.

2. **CSS**:
   - Tailwind CSS provides utility classes for styling elements.
   - Ensures a responsive design with consistent spacing and alignment.

3. **JavaScript**:
   - Validates form fields for correctness and completeness.
   - Handles user interactions such as form submission and navigation.

4. **React**:
   - Dynamically updates the UI based on user actions.
   - Manages state for form inputs and submitted data.

5. **Routing**:
   - React Router is used for navigation between the form (`/`) and data view (`/view`).

---

## Folder Structure

```
project-root/
├── src/
│   ├── components/
│   │   ├── UserForm.jsx       # Form component for user input
│   │   ├── DataView.jsx       # Data view component
│   ├── App.jsx                # Main application component
│   ├── main.jsx               # Application entry point
├── public/
├── index.html                 # Main HTML file
├── styles.css                 # Additional custom CSS (if needed)
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind CSS configuration
├── vite.config.js             # Vite configuration
└── README.md                  # Project documentation
```

---

## Screenshots

### User Registration Form
![User Form Screenshot](screenshot-form.png)

### Data View
![Data View Screenshot](screenshot-data-view.png)

---

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run preview`: Previews the production build locally.

---

## Future Improvements

- Add server-side validation and integration with a database.
- Implement authentication for secure data access.
- Enhance styling with animations and transitions.

---

## License

This project is licensed under the MIT License. Feel free to use and modify it as per your needs.

---

## Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

