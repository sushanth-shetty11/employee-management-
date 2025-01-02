# Employee Management System

## Overview
The **Employee Management System (EMS)** is a web application designed to help manage employee tasks, logins, and provide dashboards for both employees and admins. The application includes features such as task tracking, employee authentication, and role-based access to different parts of the system.

## Features
- **Employee Dashboard**: Displays task information like active, completed, and failed tasks for each employee.
- **Admin Dashboard**: Allows admins to view and manage employees and their tasks.
- **Task Management**: Employees can accept new tasks, complete them, or mark them as failed.
- **Authentication**: Both admin and employee logins are handled securely with role-based access.

## Tech Stack
- **Frontend**: React.js, TailwindCSS, Vite (for fast bundling)
- **Authentication**: Local Storage for storing user data
- **Version Control**: Git, GitHub for repository management

## Setup and Installation

### 1. Clone the repository
Clone this repository to your local machine:

--bash--
git clone https://github.com/sushanth-shetty11/employee-management-.git

2. Install dependencies
Navigate into the project directory and install the required dependencies using npm:

bash
Copy code
cd employee-management-
npm install
3. Run the application
Start the development server:

bash
Copy code
npm run dev
Visit http://localhost:3000 (or the port displayed in the terminal) to access the application.

Project Structure
The project is organized as follows:

php
Copy code
├── public/                # Static files
├── src/                   # Application code
│   ├── components/        # React components (Dashboard, Task List, etc.)
│   ├── context/           # Context API for managing user state
│   ├── utils/             # Helper utilities (localStorage functions)
│   ├── App.jsx            # Main React component
│   └── index.css          # Global styles (TailwindCSS)
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.js         # Vite configuration
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation
Contributing
Contributions are welcome! Please fork this repository and submit a pull request with your changes.

License
This project is licensed under the MIT License - see the LICENSE file for details.


