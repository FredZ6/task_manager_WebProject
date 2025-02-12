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
# Start all services (PostgreSQL, Backend, Frontend)
docker-compose up 

# Check the status of the containers
docker-compose ps

# View logs if needed
docker-compose logs -f
```

3. Access the application
- Frontend: http://localhost:3000
- Backend API: http://localhost:8080

### Port Configuration
- PostgreSQL: 5433 (Host) -> 5432 (Container)
- Backend: 8080
- Frontend: 3000

### Environment Variables
#### Database
```
POSTGRES_USER: my_docker_user
POSTGRES_PASSWORD: my_docker_password
POSTGRES_DB: my_database
```

#### Backend
```
SPRING_DATASOURCE_URL: jdbc:postgresql://db:5432/my_database
SPRING_DATASOURCE_USERNAME: my_docker_user
SPRING_DATASOURCE_PASSWORD: my_docker_password
```

### Docker Commands
```bash
# Build and start all services
docker-compose up --build -d

# Stop all services
docker-compose down

# Remove all containers and volumes
docker-compose down -v

# View logs for specific service
docker-compose logs -f [service-name]  # backend, frontend, or db

# Restart a specific service
docker-compose restart [service-name]
```

### Troubleshooting
1. If the database connection fails:
   - Check if PostgreSQL container is running: `docker-compose ps`
   - Verify database credentials in docker-compose.yml
   - Check backend logs: `docker-compose logs backend`

2. If the frontend can't connect to backend:
   - Ensure backend is running and accessible
   - Check CORS configuration in backend
   - Verify API_URL in frontend configuration

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
