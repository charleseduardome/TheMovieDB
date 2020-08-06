# Aplicação ReactJS para consumir dados de filmes da API The Movie Databese

## Sobre o projeto

Aplicação lista os filmes mais populares do momento, consumindo a API do [TheMovieDB](https://developers.themoviedb.org/), tela inicial mostrar uma listagem dos filmes mais populares, os mais populares sendo exibidos no topo da lista. Cada filme possui uma página especifica com mais detalhes.

## 🚀 Tecnologias

Tecnologias usadas

- [ReactJS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router DOM](https://reacttraining.com/react-router/)
- [Redux](https://redux.js.org/)
- [Redux Saga](https://redux-saga.js.org/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://github.com/axios/axios)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## 💻 Getting started

### Requisitos

- Solicitar KEY da API em [TheMovieDB](https://developers.themoviedb.org/3/getting-started/introduction)

**Clone o projeto e acesse a pasta**

```bash
$ git clone https://github.com/charleseduardome/TheMovieDB.git
```

**Siga os passos abaixo**

```bash
# Instale as dependências
$ yarn

# Faça uma cópia do arquivo '.env.example' para '.env'
$ cp .env.example .env

# Verifique se o arquivo .env possui a variável REACT_APP_API_URL com a url da API
# Insira sua Key na variável REACT_APP_API_KEY
# Caso deseje alterar o tamanho da imagem, altera o valor da  variável REACT_APP_BASE_URL_IMAGEM

# Start
$ yarn start
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💜 by Charles Eduardo 👋 [See my linkedin](https://www.linkedin.com/in/charleseduardome//)
