<p align="center">
   <img src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f5fa-fe0f.svg" style="width: 89px; height: 89px"/>
</p>

# <p align = "center">  - Board Camp - </p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-Arthur Nepomuceno-093D04?style=flat-square" />
</p>


##  :clipboard: Apresentação

Neste mundo cada vez mais digitalizado, há aqueles e aquelas que sentem falta de experiências fora do universo das telas.
Com o objetivo de proporcionar vivências emocionantes, a humanidade desenvolveu os jogos de tabuleiro.
Para nossa alegria, existem agentes do universo empenhados em manter viva essa antiga tradição.

Esses agentes se uniram e decidiram criar uma plataforma que disponibiliza jogos de tabuleiro para serem alugados.

***
##  :clipboard: Introdução

Este projeto gira em torno de duas entidades principais: jogos e clientes.
Os jogos são divididos por categorias, com todo jogo pertencendo a uma única categoria.
Os clientes alugam jogos, gerando registros de aluguéis.

Com esse cenário, há quatro entidades:
- categorias
- jogos
- clientes
- alugueis

***

## :computer:	Conceitos & Tecnologias 

Conceitos
- Layered Architecture *(Arquitetura em Camadas)*
- DRY *(Don't Repeat Yourself)*

Tecnologias
- JavaScript
- Node.js
- PostgreSQL
- Dayjs
- Dotenv
- Express
- Express Async Erros
- Joi

***

## 🏁 Rodando a aplicação

Este projeto foi inicializado com o Node Package Manager, então certifique-se que voce tem a ultima versão estável do [Node.js](https://nodejs.org/en/download/) e [npm](https://www.npmjs.com/) rodando localmente.

Primeiro, faça o clone desse repositório na sua maquina:

```
git clone https://github.com/arthur-nepomuceno/driven-pj15-boardCamp.git
```

Depois, dentro da pasta, rode o seguinte comando para instalar as dependencias.

```
npm install
```

Finalizado o processo, é só inicializar o servidor
```
npm run dev
```

***

## :rocket: Rotas

```yml
GET /categories
    - Rota para listar todas as categorias.
    - headers: {}
    - body: {}
    - response: 
    [
       {
         "id": 1,
         "name": "my_category"    
       }
       {
         "id": 2,
         "name": "my_other_category"    
       }
    ]
```
    
```yml 
POST /categories
    - Rota para cadastrar uma nova categoria.
    - headers: {}
    - body: 
    {
      "name": "my_new_category"
    }
    - response: status 201 - Created.
```
    
```yml 
GET /games
    - Rota para listar todos os jogos.
    - headers: {}
    - body: {}
    - response: 
    [
       {
         "id": 1,
         "name": "my_game"    
       }
       {
         "id": 2,
         "name": "my_other_game"    
       }
    ]
```

```yml
POST /games
    - Rota para cadastrar um novo jogo.
    - headers: {}
    - body: 
    {
      "name": "My_New_Game",
      "image": "http://",
      "stockTotal": 3,             //número de jogos no estoque
      "categoryId": 1,             //categoria a qual o jogo pertence
      "pricePerDay": 1500,         //custo por dia de aluguel
    }
    - response: status 201 - Created.
``` 

```yml
GET /customers
    - Rota para listar todos os clientes.
    - headers: {}
    - body: {}
    - response: 
    [
       {
         "id": 1,
         "name": "My_First_Client",
         "phone": "21998899222",
         "cpf": "01234567890",
         "birthday": "1992-10-05"
       },       
       {
         "id": 2,
         "name": "My_Second_Client",
         "phone": "21998899222",
         "cpf": "01234567891",
         "birthday": "1989-03-17"
       }
    ]
```
 
```yml
GET /customers/:id
    - Rota para listar o cliente com o id passado como parâmetro.
    - headers: {}
    - body: {}
    - response: 
    {
      "id": 1,
      "name": "My_First_Client",
      "phone": "21998899222",
      "cpf": "01234567890",
      "birthday": "1992-10-05"
    }
```

```yml
POST /customers
    - Rota para registrar um novo cliente.
    - headers: {}
    - body: 
    {
      "name": "My_New_Client",
      "phone": "21998899222",
      "cpf": "0123456798",
      "birthday": "1996-08-23"
    }
    - response: 
    {
      "id": 3
      "name": "My_New_Client",
      "phone": "21998899222",
      "cpf": "0123456798",
      "birthday": "1996-08-23"
    }
```

```yml
PUT /customers/:id
    - Rota para atualizar os dados do cliente com o id passado como parâmetro.
    - headers: {}
    - body: 
    {
      "name": "My_Second_Client",
      "phone": "13923768456",
      "cpf": "01234567891",
      "birthday": "1989-03-17"
    }
    - response: 
    {
      "id": 2,
      "name": "My_Second_Client",
      "phone": "13923768456",
      "cpf": "01234567891",
      "birthday": "1989-03-17"
    }
```

```yml
GET /rents
    - Rota para listar todos os alugueis, abertos e fechados.
    - headers: {}
    - body: {}
    - response: 
    [
        {
          "id": 1,
          "customerId": 1,
          "gameId": 22,
          "rentDate": "2022-10-29T03:00:00.000Z",
          "daysRented": 3,
          "returnDate": null,
          "originalPrice": 4500,
          "delayFee": null,
          "customer": {
            "id": 1,
            "name": "João Alfredo"
          },
          "game": {
            "id": 22,
            "categoryId": 12,
            "categoryName": "Strategy"
          }
        },
        {
          "id": 2,
          "customerId": 2,
          "gameId": 23,
          "rentDate": "2022-10-29T03:00:00.000Z",
          "daysRented": 2,
          "returnDate": "2022-10-30T03:00:00.000Z",
          "originalPrice": 1800,
          "delayFee": 0,
          "customer": {
            "id": 2,
            "name": "Alberto Augusto"
          },
          "game": {
            "id": 23,
            "categoryId": 11,
            "categoryName": "Investigation"
          }
        }
    ]
```

```yml
POST /rents
    - Rota para registrar um novo aluguel.
    - headers: {}
    - body:
    {
      customerId: 1,
      gameId: 22,
      daysRented: 3
    }
    - response: 
    {
      "id": 3,
      "customerId": 1,
      "gameId": 22,
      "rentDate": "2022-10-29T03:00:00.000Z",
      "daysRented": 3,
      "returnDate": null,
      "originalPrice": 4500,
      "delayFee": null,
      "customer": {
        "id": 1,
        "name": "João Alfredo"
      },
      "game": {
        "id": 22,
        "categoryId": 12,
        "categoryName": "Strategy"
      }
    }
```

```yml
POST /rents/:id/return
    - Rota para finalizar um aluguel, alterando o campo "returnDate" 
      de "null" para a data no momento da devolução.
    - headers: {}
    - body: {}
    - response:
    {
      "id": 2,
      "customerId": 2,
      "gameId": 23,
      "rentDate": "2022-10-29T03:00:00.000Z",
      "daysRented": 2,
      "returnDate": "2022-10-30T03:00:00.000Z",
      "originalPrice": 1800,
      "delayFee": 0,
      "customer": {
        "id": 2,
        "name": "Alberto Augusto"
      },
      "game": {
        "id": 23,
        "categoryId": 11,
        "categoryName": "Investigation"
      }
    }
```

```yml
DELETE /rents/:id
    - Rota para deletar um aluguel, passando seu id como parâmetro.
    - headers: {}
    - body: {}
    - response: status 202 - Deleted.
```


***
