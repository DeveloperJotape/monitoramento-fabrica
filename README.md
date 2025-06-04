
# 📊 Software Monitor API

Este é um sistema simples, desenvolvido com **Node.js**, que monitora uma fábrica de software fixa no GitHub. Ele consulta um repositório predeterminado e retorna informações essenciais como nome do projeto, autor, colaboradores, estatísticas de commits e mais.

---

## 🚀 Tecnologias utilizadas

- Node.js
- Express
- Axios (para consumo da API do GitHub)

---

## 📦 Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/DeveloperJotape/monitoramento-fabrica
cd monitoramento-fabrica
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o servidor

```bash
npm start
```

A API estará disponível localmente em:  
👉 `http://localhost:3000/monitor`

---

## 📡 Como funciona

Ao acessar a rota `/monitor`, a API:

1. Consulta um repositório **pré-definido** no GitHub (URL fixa no código).
2. Coleta os seguintes dados:
   - Nome do projeto
   - Autor
   - Colaboradores
   - Usuário que mais realizou commits
   - Quantidade total de commits
   - Último commit (mensagem e data)
   - Linguagem principal do projeto
   - Quantidade de estrelas
   - Quantidade de forks (copias)
   - Número de issues abertas
   - Total de branches

---

## 📥 Exemplo de resposta JSON

```json
{
	"nomeDoProjeto": "freeCodeCamp",
	"autor": "freeCodeCamp",
	"colaboradores": [
		"camperbot",
		"raisedadead",
		"ojeytonwilliams",
		"renovate[bot]",
		"sahat",
		"renovate-bot",
		"Bouncey",
		"terakilobyte",
		"SaintPeter",
		"ltegman",
		"moT01",
		"benmcmahon100",
		"erictleung",
		"ahmaxed",
		"QuincyLarson",
		"BerkeleyTrue",
		"dependabot[bot]",
		"RandellDawson",
		"bugron",
		"dhcodes",
		"ShaunSHamilton",
		"scissorsneedfoodtoo",
		"Sembauke",
		"huyenltnguyen",
		"abhisekp",
		"ValeraS",
		"ilenia-magoni",
		"a2937",
		"Greenheart",
		"gikf"
	],
	"quantidadeDeCommits": 30,
	"usuarioMaisAtivo": "camperbot",
	"dataUltimoCommit": "2025-06-04T10:13:21Z",
	"linguagem": "TypeScript",
	"estrelas": 419910,
	"copias": 40315,
	"bugs": 307,
	"totalBranches": 3
}
```

---

## 🧪 Como testar no Insomnia

### Passo a passo:

1. Abra o **Insomnia**
2. Vá em **Create > Request Collection > HTTP Request > From File**
3. Selecione a requisição de tipo **GET**
4. Adicione a url **http://localhost:3000/monitor** e clique em **SEND**

A resposta será exibida em formato JSON com todos os dados monitorados.

---

## 🛠 Como alterar o repositório monitorado

No arquivo `monitorController.js`, altere diretamente as variáveis:

```js
const repoOwner = 'usuario-do-github';
const repoName = 'nome-do-repositorio';
```

---


## 👨‍💻 Autores

Desenvolvido por João Pedro, Luís Antônio, Paulo, Matheus, Daniel e Roberto.
