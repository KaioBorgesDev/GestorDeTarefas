# **Projeto: Gestão de Tarefas**

## **Objetivo**
O objetivo deste projeto é construir uma aplicação web de **Gestão de Tarefas** utilizando **Express.js** para o backend, **MongoDB** para persistência de dados, aplicando os conceitos de **Clean Architecture** para estruturar o código de forma escalável, modular e fácil de manter.

## **Tecnologias Utilizadas**
- **Backend**: Express.js
- **Banco de Dados**: MongoDB
- **Arquitetura**: Clean Architecture
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

## **Estrutura do Projeto - Arquitetura Clean**

A aplicação será estruturada de acordo com a **Clean Architecture**, que promove uma separação de responsabilidades clara em camadas, facilitando a escalabilidade e a manutenção. A arquitetura é composta pelas seguintes camadas:

### **Camadas da Clean Architecture**:

1. **Entidades (Entities)**:
   - Contém as classes ou modelos que representam o núcleo do sistema e que encapsulam as regras de negócio fundamentais.
   - **Exemplo**: A **Entidade Tarefa**, que possui atributos como título, descrição e status.

2. **Casos de Uso (Use Cases)**:
   - Contém os casos de uso específicos da aplicação, representando a lógica que orquestra a execução de tarefas no sistema.
   - **Exemplo**: Casos de uso como "Criar Tarefa", "Listar Tarefas", "Editar Tarefa", "Excluir Tarefa", etc.

3. **Interfaces de Entrada (Interface Adapters)**:
   - Adaptadores responsáveis por transformar os dados recebidos de entradas externas (como APIs, usuários ou sistemas) para o formato adequado para os casos de uso e entidades.
   - **Exemplo**: Controladores da API RESTful, que recebem as requisições HTTP e invocam os casos de uso correspondentes.

4. **Infraestrutura (Frameworks & Drivers)**:
   - Contém a implementação dos detalhes técnicos, como a comunicação com o banco de dados e outras interações com sistemas externos.
   - **Exemplo**: O **Mongoose** para modelagem e acesso ao MongoDB.

### **Fluxo da Aplicação:**
1. **Usuário** interage com a API RESTful através do **Controller** (Camada de Apresentação).
2. O **Controller** invoca os **Use Cases** (Casos de Uso), que executam a lógica de negócio.
3. Os **Use Cases** interagem com as **Entities** (Entidades), que encapsulam as regras de negócio.
4. Os **Use Cases** utilizam a **Infraestrutura** (como o Mongoose) para acessar o banco de dados e persistir ou recuperar dados.

## **Modelo de Dados (MongoDB)**

A entidade **Tarefa** terá o seguinte modelo de dados:


const mongoose = require('mongoose');

const tarefaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  status: { type: String, enum: ['Pendente', 'Concluída'], default: 'Pendente' },
}, { timestamps: true });

const Tarefa = mongoose.model('Tarefa', tarefaSchema);

module.exports = Tarefa;
