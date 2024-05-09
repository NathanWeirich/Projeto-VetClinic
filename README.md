# VetClinic

# dados .env

HOST="localhost"
USER="root"
PASSWORD=""
DATABASE="vetclinic"
DIALECT="sqlite"

# Como Rodar

1 - instalar node.js v21.6.2

2 - abrir o terminal no projeto

3 - npm install

4 - digitar no terminal: node .\index.js

5 - Utilizar Postman para testar as rotas

# ROTAS

id = 1

**TUTORES:**

GET - localhost:3000/tutors

POST(tutor) - localhost:3000/tutor

PUT(tutor) - localhost:3000/tutor/1

DELETE(tutor) - localhost:3000/tutor/1

**PETS:**

POST(pet) - localhost:3000/pet/1

PUT(pet) - localhost:3000/pet/1/tutor/1

DELETE(pet) - localhost:3000/pet/1/tutor/1

