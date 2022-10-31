# <p align = "center">  - Board Camp - </p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-Arthur Nepomuceno-4dae71?style=flat-square" />
</p>


##  :clipboard: Descrição

Neste mundo cada vez mais digitalizado, há aqueles e aquelas que sentem falta de experiências fora do universo das telas.
Com o objetivo de proporcionar vivências emocionantes, a humanidade desenvolveu os jogos de tabuleiro.
Para nossa alegria, existem agentes do universo empenhados em manter viva essa antiga tradição.

Esses agentes se uniram e decidiram criar uma plataforma que disponibiliza jogos de tabuleiro para serem alugados.

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

## :rocket: Rotas

```yml
GET /categories
    - Rota para cadastrar um novo usuário
    - headers: {}
    - body:{
        "nome": "Lorem ipsum",
        "email": "lorem@gmail.com",
        "senha": "loremipsum"
}
```
    
```yml 
POST /categories
    - Rota para fazer login
    - headers: {}
    - body: {
    "email": "lorem@gmail.com",
    "senha": "loremipsum"
    }
```
    
```yml 
GET /games
    - Rota para listar todos os usuários
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
POST /games
    - Rota para listar um usuário pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml
GET /customers
    - Rota para atualizar um usuário pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "nome": "Lorem ipsum2",
        "email": "lorem2@gmail.com",
        "senha": "loremipsum2"
    }
```
 
```yml
GET /customers/:id
    - Rota para deletar um usuário pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
POST /customers
    - Rota para atualizar um usuário pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "nome": "Lorem ipsum2",
        "email": "lorem2@gmail.com",
        "senha": "loremipsum2"
    }
```

```yml
PUT /customers/:id
    - Rota para deletar um usuário pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
GET /rents
    - Rota para deletar um usuário pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
POST /rents
    - Rota para deletar um usuário pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
POST /rents/:id/return
    - Rota para deletar um usuário pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
DELETE /rents/:id
    - Rota para deletar um usuário pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```


***

## 🏁 Rodando a aplicação

Este projeto foi inicializado com o Node Package Manager, então certifique-se que voce tem a ultima versão estável do [Node.js](https://nodejs.org/en/download/) e [npm](https://www.npmjs.com/) rodando localmente.

Primeiro, faça o clone desse repositório na sua maquina:

```
git clone https://github.com/luanalessa/projeto-backend.git
```

Depois, dentro da pasta, rode o seguinte comando para instalar as dependencias.

```
npm install
```

Finalizado o processo, é só inicializar o servidor
```
npm start
```

:stop_sign: Não esqueça de repetir os passos acima com o [repositório](https://github.com/luanalessa/projeto-frontend.git) que contem a interface da aplicação, para testar o projeto por completo.
