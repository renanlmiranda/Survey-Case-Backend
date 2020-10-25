# Survey-Case-Backend

- Node
- Express.js 
- Sequelize
- Docker
- Postgres

# Install dependencies and start project.

- Yarn or Yarn install.

- yarn start.

# Create postgres database:

docker run --name ${imageName} -e POSTGRES_PASSWORD= ${password} -p 5432:5432 -d postgres

# Start Container:

docker ps -a

Find the CONTAINER ID or Name of your container.

docker start ${CONTAINER ID} or ${Name}

# Check if worked: 

docker ps