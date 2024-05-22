# Food Explorer

Food Explorer é uma aplicação web para um restaurante, permitindo a administração de pratos e a visualização detalhada pelo usuário. A aplicação tem duas personas principais: o administrador (admin) e o usuário.
Este é o projeto final do módulo Explorer da Rocketseat

## Índice

- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação e Execução](#instalação-e-execução)
- [Autenticação](#autenticação)
- [Layout](#layout)
## Funcionalidades

### Admin

- Criar, visualizar, editar e apagar um prato.
- Cada prato contém: imagem, nome, categoria, descrição, ingredientes e preço.
- Mensagem de sucesso ao adicionar um prato e redirecionamento para a página principal.
- Fazer upload de imagens para cadastrar os pratos.
- Visualizar e controlar o status de cada pedido em uma tabela.
- Buscar pratos pelo nome ou ingredientes.

### Usuário

- Visualizar todos os pratos cadastrados.
- Ver informações detalhadas de um prato ao clicar nele.
- Autenticação via login utilizando JWT.
- Buscar pratos pelo nome ou ingredientes.
- Incluir itens no carrinho e controlar a quantidade.
- Visualizar pedido, soma total e métodos de pagamento.
- Excluir pratos do carrinho com atualização automática do valor total.
- Marcar pratos como favoritos.

### Opcionais

- Controle de pedidos pelo admin (Entregue, Cancelado).
- Animações e transições para uma experiência de usuário mais fluida.

## Tecnologias Utilizadas

- Front-end: React, Styled-components, Axios, Moment, Swiper
- Back-end: Node.js, Express, Bcryptjs, Cookie-parser, Cors, Dotenv, Knex, Pm2
- Banco de Dados: Sqlite
- Autenticação: JWT (JSON Web Tokens)
- Upload de Imagens: Multer
- Deploy: Netlify (front-end) e Render (back-end)

## Estrutura do Projeto

```bash
FoodExplorer/
├── API/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── database/
│   │   │   ├── knex/
│   │   │   ├── sqlite/
│   │   │   └──  database.db
│   │   ├── middlewares/
│   │   ├── providers/
│   │   ├── routes/
│   │   ├── utils/
│   │   └── server.js
│   ├── temp/
│   │   └── uploads/
├── WEB/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── hooks/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── ui/
│   │   │   ├── blocks/
│   │   │   ├── components/
│   │   │   ├── layout/
│   │   │   └── pages/
│   │   ├── utils/
│   │   └── main.jsx
│   └── index.html
├── .gitignore
└──  README.md
```

## Instalação e Execução
Clone o projeto para o local desejado em seu computador.
```terminal
$ git clone git@github.com:andreviapiana/Food-Explorer.git](https://github.com/jeanjacintho/food-explorer.git
```

Executando o Backend
```terminal
# No BackEnd insira uma secret no arquivo .env vazio
  AUTH_SECRET=

# Navegue até o diretório do Backend
$ cd api

# Instale as dependências necessárias
$ npm install

# Agora inicie o servidor do Backend
$ npm run dev
```

Executando o Frontend
```terminal
# Navegue até o diretório do Frontend
$ cd web

# Instale as dependências necessárias
$ npm install

# Agora inicie o servidor do Frontend
$ npm run dev

# O terminal irá exibir o endereço local onde a aplicação está sendo executada. Basta digitar o mesmo endereço em seu navegador preferido. O endereço usado na criação do projeto foi este:

  http://localhost:5173/
```

## Autenticação
Quer ver como a aplicação funciona vista pelo Admin? Use a conta a seguir:
```terminal
EMAIL: admin@food.com
SENHA: 123456
```

Quer ver como a aplicação funciona vista pelo Usuário? Use as contas a seguir:
```terminal
EMAIL: joao@food.com || maria@food.com
SENHA: 123456
```

## Layout
![Layout do projeto](https://i.imgur.com/gx5m1lO.png)
