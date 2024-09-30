# 3D Print Manager

Welcome to **3D Print Manager**, a complete solution for uploading and managing 3D printing projects. This project allows users to upload STL files, preview them, and manage project data. Built using **Laravel** for the backend and **Vue.js** for the frontend, the project is containerized using Docker and is mobile-friendly, ready for easy deployment and scalability.

## Features

- **File Upload**: Upload multiple 3D print STL files through a drag-and-drop interface.
- **File Preview**: Files are validated and stored, preserving the original filename and extension.
- **Project Data**: Users can submit their project details such as name, email, and project description.
- **RESTful API**: The backend API accepts file uploads and project data.
- **Mobile Friendly**: The UI is fully responsive and optimized for mobile use.
- **Dockerized Setup**: The project is containerized with Docker for easy deployment.
- **Frontend**: Built with Vue.js and Vite, providing a responsive UI and fast performance.
- **Backend**: Laravel is used to handle the business logic, file storage, and API endpoints.
- **Error Handling**: Graceful error handling is implemented using Laravel’s validation and custom response structures.
- **CI/CD Pipeline**: Separate pipelines for backend and frontend are implemented using GitHub Actions.

## Technologies

The project utilizes a modern technology stack to ensure a reliable, efficient, and scalable platform, incorporating the latest tools and best practices in web development for both the backend and frontend.

For deployment, both the frontend and backend of the project are containerized using [Docker](https://www.docker.com/products/docker-desktop/) and served with [Nginx](https://www.nginx.com/). This approach simplifies the setup and deployment process, ensuring consistency across different environments.

The project is structured as a [monorepo](https://monorepo.tools/), enabling developers to work on different parts of the project independently. This setup makes local development simpler and more efficient.

### Backend

- **[Laravel](https://laravel.com/)**: Web application framework with expressive, elegant syntax
- **[Composer](https://getcomposer.org/)**: A Dependency Manager for PHP
- **[Swagger](https://swagger.io/)**: API documentation tool.

### Frontend

- **[Vue](https://vuejs.org/)**: The Progressive JavaScript Framework. Version 3.
- **[TypeScript](https://www.typescriptlang.org/)**: Typed superset of JavaScript that compiles to plain JavaScript.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.
- **[ESLint](https://eslint.org/)**: Pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
- **[Vitest](https://vitest.dev/)**: A blazing fast unit-test framework powered by Vite.
- **[Storybook](https://storybook.js.org/)**: Frontend workshop for building isolated UI components.
- **[Cypress](https://www.cypress.io/)**: Fast, easy and reliable E2E testing for anything that runs in a browser.

## Getting Started

### Prerequisites

- Internet
- Docker

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/JohnAdib/3d-print-manager.git
   cd 3d-print-manager
   ```

2. **Copy the necessary environment files:**

   - In the **backend**, Laravel uses its own `.env` file. Make sure to copy the `.env.example` file inside the `backend` directory and configure it according to your setup.

   ```bash
   cd backend
   cp .env.example .env
   ```

   - You may also update settings like file upload size limits and API URLs in the `.env` file as needed.

3. **Build and start the Docker containers:**

   ```bash
   docker-compose up --build
   ```

   This will start the `nginx`, `backend`, and `frontend` containers. The app will be available at `http://localhost`.

4. **Access the Application:**

   - **Frontend**: The Vue.js frontend is accessible at `http://localhost/`.
   - **Backend**: The Laravel API can be accessed at `http://localhost/api`.
   - **Storage**: Uploaded files can be accessed via `http://localhost/storage/{path-to-file}`.

### API Endpoints

- **POST /api/projects**: Submits a new project with file uploads.
  - **Request Body**:
    ```json
    {
      "uid": "project-uuid",
      "name": "Project Name",
      "email": "user@example.com",
      "projectName": "New 3D Project",
      "description": "Details about the project",
      "files[]": "binary data"
    }
    ```
  - **Response**:
    ```json
    {
      "okay": true,
      "msg": "Project Submitted Successfully",
      "result": {
        "uid": "26569dd9-4e1b-4b97-b35a-e7ddc4acd28a",
        "name": null,
        "email": null,
        "projectName": null,
        "description": null,
        "type": "3d_print",
        "folder": "3d_print/26569dd9-4e1b-4b97-b35a-e7ddc4acd28a",
        "dataPath": "3d_print/26569dd9-4e1b-4b97-b35a-e7ddc4acd28a/data.json",
        "files": [
          "3d_print/26569dd9-4e1b-4b97-b35a-e7ddc4acd28a/impeller_1727659548.stl",
          "3d_print/26569dd9-4e1b-4b97-b35a-e7ddc4acd28a/adapter_1727659548.stl"
        ]
      }
    }
    ```

### CI/CD Pipeline - GitHub Actions

The project includes separate pipelines for **backend** and **frontend**. These pipelines perform the following automated tasks

- **Backend pipeline**: Runs static analysis with PHPStan, formats code using Laravel Pint, and runs PHPUnit tests.
- **Frontend pipeline**: Runs linting, format checks, and any frontend-related tests, along with building the frontend.

## TODO

- [ ] Save project data to a database
- [ ] Improve file upload error handling and validation
