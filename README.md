# 🔍 Monitor de Repositórios GitHub

Sistema completo de monitoramento de repositórios GitHub desenvolvido para projeto acadêmico, composto por um backend em Node.js/Express e frontend em Next.js.

## 📁 Estrutura do Projeto

```
monitoramento-fabrica/
├── back/                 # Backend (Node.js + Express)
│   ├── controllers/      # Controladores da API
│   ├── routes/          # Rotas da API
│   ├── app.js           # Arquivo principal do servidor
│   └── package.json     # Dependências do backend
├── front/               # Frontend (Next.js + TypeScript)
│   ├── src/
│   │   ├── components/  # Componentes React
│   │   ├── pages/       # Páginas Next.js
│   │   ├── services/    # Serviços de API
│   │   └── types/       # Tipos TypeScript
│   └── package.json     # Dependências do frontend
└── README.md            # Este arquivo
```

## 🚀 Como Executar

1. **Instale todas as dependências do projeto (backend e frontend juntos):**
   ```bash
   npm install
   ```
   > Isso instala automaticamente as dependências do backend (`back/`) e do frontend (`front/`).

2. **Inicie o backend e o frontend ao mesmo tempo:**
   ```bash
   npm run dev
   ```
   > O backend ficará disponível em `http://localhost:3000` e o frontend em `http://localhost:3001`.

---

Se quiser rodar apenas um dos projetos:

- **Somente o backend:**
  ```bash
  npm run dev:back
  ```
- **Somente o frontend:**
  ```bash
  npm run dev:front
  ```

## 🔧 Funcionalidades

### Backend
- ✅ API REST para monitoramento de repositórios GitHub
- ✅ Endpoint `/monitor` que retorna dados do repositório
- ✅ Health check endpoint `/`
- ✅ CORS configurado para comunicação com frontend
- ✅ Tratamento de erros

### Frontend
- ✅ Dashboard moderno e responsivo
- ✅ Interface desenvolvida com Next.js + TypeScript
- ✅ Estilização com TailwindCSS
- ✅ Componentes reutilizáveis
- ✅ Estado de loading e tratamento de erros
- ✅ Atualização em tempo real dos dados
- ✅ Design adaptado para dispositivos móveis

## 📊 Dados Monitorados

O sistema monitora e exibe:
- Nome do projeto
- Autor/proprietário do repositório
- Lista de colaboradores
- Quantidade total de commits
- Último commit realizado

## 🛠️ Tecnologias Utilizadas

### Backend
- Node.js
- Express.js
- Axios (para requisições HTTP)
- CORS

### Frontend
- Next.js 15
- TypeScript
- TailwindCSS
- Axios
- Lucide React (ícones)

## 📝 API Routes

### Backend Endpoints

#### `GET /`
Health check da API
```json
{
  "message": "API de Monitoramento de Repositórios funcionando!",
  "version": "1.0.0"
}
```

#### `GET /monitor`
Retorna dados do repositório monitorado
```json
{
  "nomeDoProjeto": "freeCodeCamp",
  "autor": "freeCodeCamp",
  "colaboradores": ["quincy", "gikf", "..."],
  "quantidadeDeCommits": 30,
  "ultimoCommit": "feat: add new feature"
}
```

## 🎯 Objetivos Acadêmicos

Este projeto demonstra:
- Arquitetura cliente-servidor
- Desenvolvimento full-stack
- Consumo de APIs externas (GitHub API)
- Interface de usuário moderna e responsiva
- Boas práticas de desenvolvimento
- Organização e estruturação de projetos

## 📚 Para Desenvolvimento

### Estrutura de Pastas Detalhada

```
back/
├── controllers/
│   └── monitorController.js     # Lógica de negócio
├── routes/
│   └── monitorRoute.js          # Definição de rotas
└── app.js                       # Configuração do servidor

front/src/
├── components/
│   ├── StatCard.tsx             # Cartão de estatísticas
│   ├── CollaboratorsList.tsx    # Lista de colaboradores
│   └── LoadingSpinner.tsx       # Componente de loading
├── pages/
│   └── index.tsx                # Página principal
├── services/
│   └── api.ts                   # Configuração do Axios
└── types/
    └── index.ts                 # Definições TypeScript
```

---

💡 **Projeto desenvolvido para fins acadêmicos - Demonstração de conceitos de desenvolvimento web full-stack**
