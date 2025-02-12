# Task Manager Application

A full-stack task management application built with Spring Boot and React.

## Features

- User authentication (register/login)
- Create, read, update, and delete tasks
- Task due date management
- Task categorization (overdue, due today, upcoming)
- Dark/Light theme support
- Responsive design
- Glass-morphism UI

## Technology Stack

### Backend
- Java 17
- Spring Boot 3.x
- Spring Security
- PostgreSQL
- Maven
- Docker

### Frontend
- React 18
- Material-UI (MUI)
- Axios
- React Router
- CSS-in-JS

## Getting Started

### Prerequisites
- Docker and Docker Compose
- Node.js 16+ and npm
- Java 17
- Maven

### Running the Application

1. Clone the repository
```bash
git clone [repository-url]
cd [project-directory]
```

2. Start the backend services using Docker Compose
```bash
# Navigate to the backend directory
cd backend

# Build and start the containers
docker-compose up --build -d

# Check the running containers
docker ps

# Check logs if needed
docker-compose logs -f
```

3. Start the frontend development server
```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm start
```

4. Access the application
- Frontend: http://localhost:3000
- Backend API: http://localhost:8080

### Docker Commands

#### Common Docker Commands
```bash
# Stop the containers
docker-compose down

# Rebuild and restart containers
docker-compose up --build -d

# View container logs
docker-compose logs -f

# Remove all containers and volumes
docker-compose down -v
```

#### Database Access
```bash
# Access PostgreSQL database
docker exec -it db psql -U my_docker_user -d my_database

# Backup database
docker exec -t db pg_dump -U my_docker_user my_database > backup.sql

# Restore database
docker exec -i db psql -U my_docker_user -d my_database < backup.sql
```

## API Endpoints

### User Management
- POST `/api/users/register` - Register a new user
- POST `/api/users/login` - User login
- GET `/api/users/{userId}` - Get user details

### Task Management
- GET `/api/tasks/{userId}` - Get all tasks for a user
- POST `/api/tasks/create` - Create a new task
- PUT `/api/tasks/{taskId}` - Update a task
- DELETE `/api/tasks/{taskId}` - Delete a task

## Project Structure
project/
├── backend/
│ ├── src/
│ │ ├── main/
│ │ │ ├── java/
│ │ │ └── resources/
│ │ └── test/
│ ├── Dockerfile
│ └── pom.xml
└── frontend/
├── src/
│ ├── components/
│ ├── services/
│ └── styles/
├── package.json
└── README.md


## Security

- Password encryption using BCrypt
- JWT-based authentication (planned)
- CORS configuration
- Spring Security implementation

## Future Enhancements

- [ ] Email notifications for task deadlines
- [ ] Task sharing between users
- [ ] Task categories and tags
- [ ] Task priority levels
- [ ] Task completion statistics
- [ ] Mobile application

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Spring Boot team for the excellent framework
- React team for the frontend framework
- Material-UI team for the component library