import { useState, useEffect } from 'react';
import Head from 'next/head';
import { 
  Github, 
  GitCommit, 
  User, 
  Users, 
  RefreshCw, 
  AlertCircle,
  CheckCircle,
  Monitor,
  Star
} from 'lucide-react';
import { repositoryService } from '@/services/api';
import { RepositoryData } from '@/types';
import StatCard from '@/components/StatCard';
import CollaboratorsList from '@/components/CollaboratorsList';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function Home() {
  const [data, setData] = useState<RepositoryData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const repositoryData = await repositoryService.getRepositoryInfo();
      setData(repositoryData);
      setLastUpdate(new Date());
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      setError('Erro ao carregar dados do repositório. Verifique se o backend está rodando.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = () => {
    fetchData();
  };

  return (
    <>
      <Head>
        <title>Monitor de Repositórios GitHub | Dashboard</title>
        <meta name="description" content="Dashboard para monitoramento de repositórios GitHub" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center">
                <div className="flex items-center">
                  <Monitor className="h-8 w-8 text-blue-600 mr-3" />
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                      Monitor de Repositórios
                    </h1>
                    <p className="text-sm text-gray-500">
                      Dashboard de monitoramento GitHub
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                {lastUpdate && (
                  <p className="text-sm text-gray-500">
                    Última atualização: {lastUpdate.toLocaleTimeString('pt-BR')}
                  </p>
                )}
                <button
                  onClick={handleRefresh}
                  disabled={loading}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                  Atualizar
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {loading && !data ? (
            <div className="flex flex-col items-center justify-center py-12">
              <LoadingSpinner size="lg" />
              <p className="mt-4 text-gray-600">Carregando dados do repositório...</p>
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
              <div className="flex items-center">
                <AlertCircle className="h-6 w-6 text-red-600 mr-3" />
                <div>
                  <h3 className="text-lg font-medium text-red-800">Erro ao carregar dados</h3>
                  <p className="text-red-700 mt-1">{error}</p>
                </div>
              </div>
            </div>
          ) : data ? (
            <>
              {/* Status Banner */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-green-800 font-medium">
                    Sistema conectado e funcionando
                  </span>
                </div>
              </div>

              {/* Repository Info */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Github className="h-8 w-8 text-gray-700 mr-3" />
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{data.nomeDoProjeto}</h2>
                      <p className="text-gray-600">by {data.autor}</p>
                    </div>
                  </div>
                  <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-yellow-700 text-sm font-medium">Repositório Monitorado</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-2">Último Commit:</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{data.ultimoCommit}</p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <StatCard
                  icon={<User className="h-6 w-6 text-blue-600" />}
                  title="Autor do Projeto"
                  value={data.autor}
                  description="Proprietário do repositório"
                />
                
                <StatCard
                  icon={<GitCommit className="h-6 w-6 text-green-600" />}
                  title="Total de Commits"
                  value={data.quantidadeDeCommits}
                  description="Commits disponíveis na API"
                />
                
                <StatCard
                  icon={<Users className="h-6 w-6 text-purple-600" />}
                  title="Colaboradores"
                  value={data.colaboradores.length}
                  description="Total de contribuidores"
                />
              </div>

              {/* Collaborators List */}
              <CollaboratorsList colaboradores={data.colaboradores} />
            </>
          ) : null}
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="text-center text-gray-500 text-sm">
              <p>© 2024 Monitor de Repositórios GitHub - Projeto Acadêmico</p>
              <p className="mt-1">Desenvolvido com Next.js, TypeScript e TailwindCSS</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
