# Backend do desafio
## OBS: O frontend que irá consumir as API's deste desafio se encontra no link: https://github.com/RaphaelLima123/fbenevides-frontend
Este backend foi feito em Node utilizando o express para criar as rotas e typeorm para escrever no banco de dados PostgreSQL

### Primeiro passo
Criar uma pasta para o projeto e clonar o repositório
```
mkdir projectBackend
cd projectBackend
git clone https://github.com/RaphaelLima123/fbenevides-backend.git .
```

### Segundo passo
Dentro do diretório do projeto intalar as dependências
```
yarn
```

### Terceiro passo
Você deverá criar um banco de dados e configurar o arquivo ormconfig.json com as configurações do seu banco de dados, altere os dados abaixo conforme o SEU BANCO DE DADOS.
```
{
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "postgres",
  "password": "postgres",
  "database": "fbenevides",
  "synchronize": true,
  "logging": false,
  "entities": [
     "./src/entities/*.ts"
  ],
  "migrations": [
     "./src/database/migrations/*.ts"
  ],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
}
```

### Quarto passo
Realizar as migrations para criar as tabelas no seu banco de dados
```
yarn typeorm migration:run
```

### Quinto passo
Ativar o servidor para que o frontend possa consumir as API's ou utilizar um programa como o insominia(link: https://insomnia.rest/) ou postman(link: https://www.postman.com/)
```
yarn dev
```
