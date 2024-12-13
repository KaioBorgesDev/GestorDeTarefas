# **Projeto: Gestão de Tarefas**

## **Objetivo**
O objetivo deste projeto é construir uma aplicação web de **Gestão de Tarefas** utilizando **Express.js** para o backend, **MongoDB** para persistência de dados e aplicando os conceitos de **Domain-Driven Design (DDD)** para estruturar o código de forma escalável e fácil de manter.

## **Tecnologias Utilizadas**
- **Backend**: Express.js
- **Banco de Dados**: MongoDB
- **Design de Arquitetura**: Domain-Driven Design (DDD)
- **Outras ferramentas**: 
  - **Mongoose**: Para modelar o banco de dados MongoDB
  - **Node.js**: Ambiente de execução

## **Funcionalidades**

A aplicação permitirá que o usuário faça o **gerenciamento de suas tarefas** através de uma API RESTful. As principais funcionalidades da aplicação são:

### 1. **Adicionar Tarefa**
- O usuário pode criar uma nova tarefa fornecendo um título e uma descrição.
- A tarefa será armazenada no banco de dados (MongoDB).

### 2. **Listar Tarefas**
- O usuário pode visualizar todas as tarefas, com seu título, descrição e status (ex: "Pendente" ou "Concluída").

### 3. **Editar Tarefa**
- O usuário pode editar o título e/ou a descrição de uma tarefa existente.

### 4. **Excluir Tarefa**
- O usuário pode excluir uma tarefa específica do sistema.

### 5. **Marcar Tarefa como Concluída**
- O usuário pode atualizar o status de uma tarefa para "Concluída".

### 6. **Filtrar Tarefas por Status**
- O usuário pode filtrar tarefas com base no seu status (pendente ou concluída).

## **Estrutura do Projeto - Arquitetura DDD**

A aplicação será estruturada de acordo com a arquitetura **Domain-Driven Design (DDD)**, que visa separar as responsabilidades de maneira clara, para promover a escalabilidade e facilidade de manutenção.

### **Camadas do DDD:**

1. **Domain (Domínio)**:
   - Responsável pelas regras de negócio. 
   - Contém as entidades e serviços de domínio.
   - **Entidade Tarefa**: A principal entidade do sistema, que representa uma tarefa com atributos como título, descrição e status.

2. **Application (Aplicação)**:
   - Define os casos de uso da aplicação (os comportamentos que o sistema deve suportar).
   - **Service**: Implementa os casos de uso, como criar, listar, editar e excluir tarefas.

3. **Infrastructure (Infraestrutura)**:
   - Interage com os sistemas externos (como o banco de dados, por exemplo).
   - Utiliza o **Mongoose** para modelar e acessar o MongoDB.
   - Responsável pela persistência de dados e por conectar o banco de dados.

4. **Presentation (Apresentação)**:
   - Exposição da API RESTful utilizando o **Express.js**.
   - Aqui ficam as rotas da API que serão consumidas pelos usuários.

## **Modelo de Dados (MongoDB)**

A entidade **Tarefa** terá o seguinte modelo de dados:

```javascript
const mongoose = require('mongoose');

const tarefaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  status: { type: String, enum: ['Pendente', 'Concluída'], default: 'Pendente' },
}, { timestamps: true });

const Tarefa = mongoose.model('Tarefa', tarefaSchema);

module.exports = Tarefa;
