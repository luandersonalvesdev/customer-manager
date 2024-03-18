# Desafio UOL Software Engineer

Este projeto foi desenvolvido como um desafio técnico para o cargo de Software Engineer da UOL.
É um aplicativo web full-stack feito para gerenciamento de clientes.

## Rode localmente

  1. Primeiramente você precisa ter o [Docker](https://docs.docker.com/engine/install/ubuntu/), [Docker Compose](https://docs.docker.com/compose/install/) e [Node](https://nodejs.org/en)(versão 16 ou superior) instalado.
  2. Certifique-se de que as portas `3000`, `3001` e `5432` do seu computador estejam disponíveis; caso contrário, poderá ocorrer erros.
  3. Instale todas as dependências (`frontend` e `backend`) executando:
  ```bash
    npm run install:all
  ```
  4. Dentro de cada diretório tem um arquivo `.env.example` que você pode configurar manualmente ou execute o comando:
  ```bash
    npm run setup:env
  ```
  5. Por fim execute:
  ```bash
    npm run docker:up
  ```
#### Finalizado! <br>
Agora basta acessar [localhost:3000](http://localhost:3000/) que você verá algo parecido com isso:

![healthy frontend](/assets/preview-frontend.png)

E se acessar [localhost:3001](http://localhost:3001/) você verá algo parecido com isso:

![healthy backend](/assets/preview-backend.png)

> A aplicação ira subir três containers: um para o backend, um para o frontend e um para o banco de dados.

## Estrutura do banco de dados
<details> <summary>Ver mais</summary>


O banco de dados utilizado foi o [Postgres](https://www.postgresql.org/) pela sua rapidez, versatilidade e facilidade de utilização. A estrutura escolhida foi a seguinte.

![db-structure](/assets/preview-db.png)
</details>

## Documentação da API

<details> <summary>Ver mais</summary>

### Criar cliente

![#f03c15](https://placehold.co/15x15/49CC90/49CC90.png) &nbsp;**POST**

```
/customer
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `fullName` | `string` | Obrigatório |
| `email` | `string` | Obrigatório |
| `phoneNumber` | `string` | Obrigatório |
| `cpf` | `string` | Obrigatório |
| `statusId` | `number` | Obrigatório |

<details> <summary> Retorno esperado </summary> 

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
> status code: `201`
</details>

___

### Atualizar cliente

![#f03c15](https://placehold.co/15x15/FCA130/FCA130.png) &nbsp;**PUT**

```
/customer
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `number` | Obrigatório |
| `fullName` | `string` | Obrigatório |
| `email` | `string` | Obrigatório |
| `phoneNumber` | `string` | Obrigatório |
| `cpf` | `string` | Obrigatório |
| `statusId` | `number` | Obrigatório |

<details> <summary> Retorno esperado </summary> 


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
> status code: `200`
</details>

___


### Buscar todos os clientes

![#f03c15](https://placehold.co/15x15/61AFFE/61AFFE.png) &nbsp;**GET**

```
/customer
```

| Query Parâmetros   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `limit` | `string` | `10` valor padrão |
| `offset` | `string` | `0` valor padrão |

<details> <summary> Retorno esperado </summary> 

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
> status code: `200`
</details>

___


### Buscar cliente por `id`

![#f03c15](https://placehold.co/15x15/61AFFE/61AFFE.png) &nbsp;**GET**

```
/customer/:id
```

<details> <summary> Retorno esperado </summary> 


```bash
{
  "id": 1,
  "fullName": "Jorel",
  "email": "jorel@email.com",
  "cpf": "11111111111",
  "phoneNumber": "11111111111",
  "status": {
    "name": "Ativo",
    "id": 1
  },
  "createdAt": "2024-03-18T00:01:12.968Z",
  "updatedAt": "2024-03-18T00:01:12.968Z"
}
```
> status code: `200`
</details>

___


### Buscar todos os status

![#f03c15](https://placehold.co/15x15/61AFFE/61AFFE.png) &nbsp;**GET**

```
/status
```

<details> <summary> Retorno esperado </summary> 

```bash
[
  {
    "id": 1,
    "name": "Ativo"
  },
  {
    "id": 2,
    "name": "Inativo"
  },
  {
    "id": 3,
    "name": "Aguardando ativação"
  },
  {
    "id": 4,
    "name": "Desativado"
  }
]
```
> status code: `200`
</details>

</details>


## Testes

<details> <summary>Ver mais</summary>

<br>

<details> <summary>Backend</summary>

Os testes unitários do `backend` foram feitos pelo `Mocha`, `Chai` e `Sinon`. Também `nyc` foi utilizado para mostrar a cobertura.

### Executar

Para executar os testes:
```bash
  npm run test:backend:coverage
```

Se tudo ocorrer bem, você vera alguma coisa parecida com isso:
![preview-test-api-coverage](/assets/preview-tests-backend-coverage.png)

</details>

<details> <summary>Frontend</summary>

Os testes unitários do `frontend` foram feitos pelo `Jest` e `React Testing Library` com auxílio do `Babel`.

### Executar

Para executar os testes:
```bash
  npm run test:frontend:coverage
```

Se tudo ocorrer bem, você vera alguma coisa parecida com isso:
![preview-test-api-coverage](/assets/preview-tests-frontend-coverage.png)

</details>

</details>


## Padrão de design

<details> <summary>Ver mais</summary>

<br>

<details> <summary>Backend</summary>

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
</details>

<details> <summary>Frontend</summary>

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


</details>


</details>

## Demonstração de uso 📽️

<details> <summary>Ver mais</summary>

<br>

<details> <summary>PC</summary>

![video-pc](./assets/preview-usage-pc.gif)
</details>

<details> <summary>Smart Phone</summary>

![video-pc](./assets/preview-usage-mobile.gif)
</details>

</details>


## Outros detalhes

Tanto o diretório `/frontend` quanto o `/backend` tem seus respectivos `README.md` para mais detalhes. Visite para saber mais.

___

Obrigado pela sua atenção.