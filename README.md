# Survey-Case-Backend
- Node
- Express.js 
- Sequelize
- Docker
- Postgres
- JsonWebToken
- Bcrypt.js

# Install dependencies and start project.
- yarn or yarn install
- yarn start

# Create database container (postgres):
- docker run --name ${imageName} -e POSTGRES_PASSWORD=${password} -p 5432:5432 -d postgres

# Start Container:
- docker ps -a
- Find the CONTAINER ID or Name of your container.
- docker start ${CONTAINER ID} or ${Name}

# Check if worked: 
- docker ps

# Create db and run migrations:
- yarn sequelize db:create
- yarn sequelize db:migrate
