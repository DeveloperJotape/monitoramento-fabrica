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

    // Contagem de branches
    const branchesResponse = await axios.get(`${githubApi}/repos/${repoOwner}/${repoName}/branches`);
    const totalBranches = branchesResponse.data.length;

    const projeto = {
      nomeDoProjeto: repoResponse.data.name,
      autor: repoResponse.data.owner.login,
      colaboradores: collaboratorsResponse.data.map(c => c.login),
      quantidadeDeCommits: commitsResponse.data.length,
      usuarioMaisAtivo: colaboradores.length > 0 ? colaboradores[0].login : null,
      dataUltimoCommit: commits[0].commit.committer.date,
      linguagem: dadosRepo.language,
      estrelas: dadosRepo.stargazers_count,
      copias: dadosRepo.forks_count,
      bugs: dadosRepo.open_issues_count,
      totalBranches
    };

    res.json(projeto);

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ erro: 'Erro ao obter dados do GitHub' });
  }
};

module.exports = { getRepositoryInfo };