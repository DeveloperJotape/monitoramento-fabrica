const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Importa a rota de monitoramento
const monitorRoute = require('./routes/monitorRoute.js');
app.use('/monitor', monitorRoute);

// Rota de health check
app.get('/', (req, res) => {
  res.json({ message: 'API de Monitoramento de Repositórios funcionando!', version: '1.0.0' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
