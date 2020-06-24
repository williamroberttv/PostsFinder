# Índice

- [Sobre](#sobre)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Usar](#como-usar)
- [Como Contribuir](#como-contribuir)

<a id="sobre"></a>

## :bookmark: Sobre

O <strong>PostsFinder</strong> é uma aplicação Web que faz uma busca e listagens de posts de usuários de uma determinada empresa.

Essa aplicação foi construída utilizando uma API que consome outros dois endpoits [usuários](http://jsonplaceholder.typicode.com/users) [posts](http://jsonplaceholder.typicode.com/posts).

<a id="tecnologias-utilizadas"></a>

## :rocket: Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Axios](https://github.com/axios/axios)
- [ReactJS](https://reactjs.org/)
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
- [Leaflet](https://leafletjs.com/)

## :heavy_check_mark: Resultado:

<h1 align="center">
    <img alt="Web" src="./screenshots/gitfi.gif" width="600px">
</h1>

<a id="como-usar"></a>

## :fire: Como usar

- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado na máquina
  - Também, é **preciso** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.

1. Faça um clone :

```sh
  $ git clone https://github.com/williamroberttv/PostsFinder.git
```

2. Executando a Aplicação:

```sh
  # Instale as dependências
  $ npm install

  # Inicie a API
  $ cd server
  $ npm start

  # Inicie a aplicação web
  $ cd react-frontend
  $ npm start

```

<a id="como-contribuir"></a>

## :recycle: Como contribuir

- Faça um Fork desse repositório,
- Crie uma branch com a sua feature: `git checkout -b my-feature`
- Commit suas mudanças: `git commit -m 'feat: My new feature'`
- Push a sua branch: `git push origin my-feature`
