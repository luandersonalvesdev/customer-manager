# Backend do Desafio UOL Software Engineer

If you followed all the steps described at the beginning of the main [`README.md`](https://github.com/luandersonalvesdev/store-smartphone-manager/blob/main/README.md) to run locally, access [localhost:3001](http://localhost:3001) and you will see the health check!
Se você seguiu todos os passos descritos no [`README.md`](https://github.com/luandersonalvesdev/customer-manager/blob/luanderson-alves-test-fullstack/README.md) principal para rodar localmente, basta acessar [localhost:3000](http://localhost:3000) que você verá a saúde da API.

![backend](/assets/preview-backend.png)

## Technologies

- [Docker](https://www.docker.com/)
- [Express](https://expressjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Node](https://nodejs.org/en)
- [Nodemon](https://nodemon.io/)
- [Sequelize](https://sequelize.org/)
- [Joi](https://joi.dev/api/?v=17.12.2)
- [Chai](https://www.chaijs.com/)
- [Mocha](https://mochajs.org/)
- [Sinon](https://sinonjs.org/)
- [NYC](https://istanbul.js.org/)
- [Eslint](https://eslint.org/)

## Estrutura do banco de dados

O banco de dados utilizada foi o [Postgres](https://www.postgresql.org/) pela sua rapidez, versatilidade e facilidade de utilização. A estrutura escolhida foi a seguinte.

![db-structure](/assets/preview-db.png)


## Documentação da API

### Criar cliente

![#f03c15](https://placehold.co/15x15/49CC90/49CC90.png) &nbsp;**POST**

```
/customer
```

| Parametro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `fullName` | `string` | Obrigatório |
| `email` | `string` | Obrigatório |
| `phoneNumber` | `string` | Obrigatório |
| `cpf` | `string` | Obrigatório |
| `statusId` | `number` | Obrigatório |

<details> <summary> Retorno esperado </summary> 

* status code `201`

```bash
{
  "id": 1,
  "fullName": "Jorel",
  "email": "jorel@email.com",
  "phoneNumber": "11111111111",
  "cpf": "11111111111",
  "statusId": 1,
  "updatedAt": "2024-03-18T00:42:34.179Z",
  "createdAt": "2024-03-18T00:42:34.179Z"
}
```
</details>

___

### Atualizar cliente

![#f03c15](https://placehold.co/15x15/FCA130/FCA130.png) &nbsp;**PUT**

```
/customer
```

| Parametro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `number` | Obrigatório |
| `fullName` | `string` | Obrigatório |
| `email` | `string` | Obrigatório |
| `phoneNumber` | `string` | Obrigatório |
| `cpf` | `string` | Obrigatório |
| `statusId` | `number` | Obrigatório |

<details> <summary> Retorno esperado </summary> 

* status code `200`

```bash
{
  "id": 1,
  "fullName": "Jorel 2",
  "email": "jorel2@email.com",
  "phoneNumber": "33333333333",
  "cpf": "33333333333",
  "statusId": 2
}
```
</details>

___


### Buscar todos os clientes

![#f03c15](https://placehold.co/15x15/61AFFE/61AFFE.png) &nbsp;**GET**

```
/customer
```

| Query parametros   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `limit` | `string` | `10` valor padrão |
| `offset` | `string` | `0` valor padrão |

<details> <summary> Retorno esperado </summary> 

* status code `200`

```bash
[
  {
    "id": 1,
    "fullName": "Jorel",
    "email": "jorel@email.com",
    "cpf": "11111111111",
    "phoneNumber": "11111111111",
    "createdAt": "2024-03-18T00:42:34.179Z",
    "updatedAt": "2024-03-18T00:42:34.179Z",
    "status": {
      "name": "Ativo",
      "id": 1
    }
  },
  {
    "id": 2,
    "fullName": "Lara",
    "email": "lara@email.com",
    "cpf": "22222222222",
    "phoneNumber": "22222222222",
    "createdAt": "2024-03-18T00:42:34.179Z",
    "updatedAt": "2024-03-18T00:42:34.179Z",
    "status": {
      "name": "Inativo",
      "id": 2
    }
  },
]
```

</details>

## Testes

Os testes unitários do `backend` foram feitos pelo `Mocha`, `Chai` e `Sinon`. Também `nyc` foi utilizado para mostrar a cobertura.

### Executar

Para executar os testes:
```bash
  npm run test:backend:coverage
```

Se tudo ocorrer bem, você vera alguma coisa parecida com isso:
![preview-test-api-coverage](/assets/preview-tests-backend-coverage.png)


## Padrão de design

### Padrão de design MSC
#### Visão Geral
O padrão arquitetural MSC (Model, Service, Controller) fornece uma abordagem estruturada para construir APIs, segregando responsabilidades em camadas distintas: Model, Service e Controller. Essa separação aprimora a manutenibilidade, facilita a solução de problemas, promove a escalabilidade dentro da aplicação e facilidade nos testes de unidade.

#### Model
A camada Model serve como a interface para interações com o banco de dados. Ela encapsula todas as operações relacionadas ao banco de dados, como consulta, inserção, atualização e exclusão de dados. Ao lidar com essas tarefas, o Model garante a integridade e consistência dos dados, enquanto abstrai a complexidade do banco de dados de outras camadas.

#### Service
A camada Service encapsula a lógica de negócios e regras da aplicação. Ela utiliza as funcionalidades fornecidas pela camada Model e implementa a lógica principal necessária para processar solicitações. Essa camada orquestra diferentes operações, impõe regras de negócios e atua como intermediária entre o Controller e o Model.

#### Controller
A camada Controller serve como ponto de entrada para solicitações recebidas e lida com a interação com o cliente. Ele recebe solicitações, processa dados de entrada, chama os métodos de Service apropriados e gera respostas para enviar de volta ao cliente. O Controller garante que as respostas estejam no formato necessário e contenham as informações necessárias.

#### Vantagens
- Manutenibilidade: A separação de preocupações permite uma manutenção e atualizações mais fáceis. Cada camada pode ser modificada ou expandida sem afetar as outras, facilitando a gestão do código.
- Escalabilidade: A estrutura modular permite uma escalabilidade fácil, pois diferentes camadas podem ser escaladas independentemente com base nos requisitos da aplicação.
- Testes: As camadas distintas facilitam os testes unitários, pois cada camada pode ser testada separadamente, promovendo uma cobertura e confiabilidade de teste melhores.
