const express = require('express');
const app = express();

// Importa a rota de monitoramento
const monitorRoute = require('./routes/monitorRoute.js');
app.use('/monitor', monitorRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
