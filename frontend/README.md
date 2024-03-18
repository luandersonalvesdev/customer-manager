# Frontend do Desafio UOL Software Engineer

Se você seguiu todos os passos descritos no [`README.md`](https://github.com/luandersonalvesdev/customer-manager/blob/luanderson-alves-test-fullstack/README.md) principal para rodar localmente, basta acessar [localhost:3000](http://localhost:3000) que você verá a página do projeto.

![frontend](/assets/preview-frontend.png)

## Tecnologias usadas

- [Docker](https://www.docker.com/)
- [Vite](https://vitejs.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [React](https://react.dev/)
- [Axios](https://axios-http.com/)
- [Jest](https://jestjs.io/pt-BR/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Zod](https://zod.dev/)
- [React Hook Form](https://react-hook-form.com/)
- [React Router Dom V6](https://reactrouter.com/en/main)
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Post CSS](https://postcss.org/)
- [Eslint](https://eslint.org/)

## Demonstração de uso 📽️

- PC
![video-pc](../assets/preview-usage-pc.gif)

- Smart Phone
![video-mobile](../assets/preview-usage-mobile.gif)

## Tests

Os testes unitários do `frontend` foram feitos pelo `Jest` e `React Testing Library` com auxílio do `Babel`.

### Executar

Para executar os testes:
```bash
  npm run test:frontend:coverage
```

Se tudo ocorrer bem, você vera alguma coisa parecida com isso:
![preview-test-api-coverage](/assets/preview-tests-frontend-coverage.png)

## Padrão de Design SRP
#### Visão Geral
O padrão SRP (Single Responsibility Principle) aplicado ao frontend com React promove componentes de responsabilidade única, resultando em uma arquitetura modular e fácil de manter. Cada componente realiza uma única tarefa específica, facilitando a reutilização e simplificando a manutenção.

#### Componentes de Responsabilidade Única
Componentes independentes encapsulam funcionalidades únicas, sendo facilmente compostos para criar interfaces complexas. Essa abordagem facilita os testes unitários, pois cada componente pode ser testado separadamente, promovendo uma cobertura de teste mais abrangente e confiável.

#### Utilização do React
React permite a criação de interfaces declarativas e promove a modularidade do código. Os componentes são reutilizáveis e focados em uma única responsabilidade, facilitando o desenvolvimento e a manutenção da aplicação. A modularidade também beneficia os testes unitários, pois cada componente pode ser testado de forma isolada, garantindo a integridade do código.

#### Vantagens
- Modularidade: Facilita a compreensão, teste e manutenção do código.
- Reutilizabilidade: Reduz a duplicação de código e aumenta a produtividade.
- Facilidade de Manutenção: Permite alterações sem afetar outras partes da aplicação.
- Testabilidade: Componentes de responsabilidade única facilitam os testes unitários, promovendo uma cobertura de teste mais abrangente e confiável.


