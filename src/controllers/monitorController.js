const axios = require('axios');

// URL do repositório fixo que será monitorado
const repoOwner = 'freeCodeCamp'; 
const repoName = 'freeCodeCamp'; 

// Função que retorna os dados do repositório
const getRepositoryInfo = async (req, res) => {
  try {
    // Busca informações do repositório
    const repoResponse = await axios.get(`https://api.github.com/repos/${repoOwner}/${repoName}`);

    // Busca lista de commits
    const commitsResponse = await axios.get(`https://api.github.com/repos/${repoOwner}/${repoName}/commits`);

    // Busca colaboradores
    const collaboratorsResponse = await axios.get(`https://api.github.com/repos/${repoOwner}/${repoName}/contributors`);

    const projeto = {
      nomeDoProjeto: repoResponse.data.name,
      autor: repoResponse.data.owner.login,
      colaboradores: collaboratorsResponse.data.map(c => c.login),
      quantidadeDeCommits: commitsResponse.data.length,
      ultimoCommit: commitsResponse.data[0].commit.message
    };

    res.json(projeto);

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ erro: 'Erro ao obter dados do GitHub' });
  }
};

module.exports = { getRepositoryInfo };