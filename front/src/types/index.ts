export interface RepositoryData {
  nomeDoProjeto: string;
  autor: string;
  colaboradores: string[];
  quantidadeDeCommits: number;
  ultimoCommit: string;
}

export interface ApiResponse {
  message?: string;
  version?: string;
  erro?: string;
} 